import {
  setDOMAttribute,
  appendDOM,
  updateDOM,
  setKeyInVDOM,
  setChildren,
} from './manageDOM';
import textSort from '../../lib/textSort';
import {
  getInitVDOM,
  getDiffVDOM,
  setDiffVDOM,
  setInitVDOM,
} from './virtualDOM';

const makeAttrList = (attrs: SoactDomAttribute | null) => {
  return attrs
    ? Object.entries(attrs).sort(([a], [b]) => (a > b ? 1 : a < b ? -1 : 0))
    : [];
};

const updateDOMAttribute = (
  $currentElement: HTMLElement,
  initAttrs: SoactDomAttribute | null,
  diffAttrs: SoactDomAttribute | null
) => {
  // 초기 VDOM의 props가 없거나 비교 VDOM의 props가 없으면 DOMAttrs과 props를 변경하고 return
  if (!Object.is(initAttrs, diffAttrs) && (!initAttrs || !diffAttrs)) {
    console.log('prop 중 하나가 null인 변경사항 있음!');
    setDOMAttribute($currentElement, diffAttrs);
    initAttrs = diffAttrs;
    return;
  }

  const initAttrList: SoactDomAttributeList = makeAttrList(initAttrs);
  const diffAttrList: SoactDomAttributeList = makeAttrList(diffAttrs);

  // 두 props의 길이가 다르면 DOMAttrs과 props를 변경하고 return
  if (initAttrList.length !== diffAttrList.length) {
    console.log('props의 길이가 다른 변경사항 있음!');
    setDOMAttribute($currentElement, diffAttrList);
    initAttrs = diffAttrs;
    return;
  }

  for (let i = 0; i < diffAttrList.length; i++) {
    const [propName, propValue] = diffAttrList[i];

    // 비교 props에는 있으나 초기 props에는 없으면 변경사항 적용 후 return
    // propName이나 propValue가 달라도 변경사항 적용 후 return
    if (
      !initAttrList[i] ||
      Object.is(initAttrList[i][0], propName) ||
      Object.is(initAttrList[i][1], propValue)
    ) {
      console.log('변경사항 있음!');
      setDOMAttribute($currentElement, diffAttrList);
      initAttrs = diffAttrs;
      return;
    }
  }
};

const compareChildren = (
  $currentElement: HTMLElement,
  initChildren: Children,
  diffChildren: Children
) => {};

const updateVDOM = () => {
  const initVDOM = getInitVDOM();
  const diffVDOM = getDiffVDOM();
  setKeyInVDOM([diffVDOM]);

  if (!initVDOM.current) {
    throw new Error(`${initVDOM.el}, ${initVDOM.key}의 current가 없습니다.`);
  }

  const updateVDOM = (
    initVDOM: string | VDOM | undefined,
    diffVDOM: string | VDOM,
    parentVDOM: string | VDOM | null = null
  ) => {
    if (
      !initVDOM ||
      typeof initVDOM === 'string' ||
      typeof diffVDOM === 'string'
    ) {
      if (parentVDOM && typeof parentVDOM !== 'string') {
        const $parentElement = parentVDOM.current;
        if (!initVDOM || typeof initVDOM === 'string') {
          if (!Object.is(initVDOM, diffVDOM)) {
            parentVDOM.children = [diffVDOM];
            console.log({ parentVDOM });
            // DOM 리렌더링
            if ($parentElement) {
              setChildren($parentElement, [diffVDOM]);
            }
          }
        }
      }
    } else {
      for (let i = 0; i < diffVDOM.children.length; i++) {
        const initVDOMChildren = initVDOM.children[i];
        const diffVDOMChildren = diffVDOM.children[i];

        updateVDOM(initVDOMChildren, diffVDOMChildren, initVDOM);

        if (typeof initVDOMChildren === 'string') {
          if (!Object.is(initVDOMChildren, diffVDOMChildren)) {
            initVDOM.children[i] = diffVDOM.children[i];
          }
        }
      }
    }
  };
  updateVDOM(initVDOM, diffVDOM);
  console.log({ initVDOM, diffVDOM });

  // props 업데이트
  // 이건 변경된 VDOM으로 리렌더링 할 때 사용하기
  // updateDOMAttribute($currentElement, initVDOM.props, diffVDOM.props);

  // VDOM의 변경점을 찾아서 수정된 VDOM 생성
  // const updateInitVDOM = (initChildren: Children, diffChildren: Children) => {
  //   if (!diffChildren.length) {
  //   } else {
  //     for (let i = 0; i < diffChildren.length; i++) {
  //       const initVDOM = initChildren[i];
  //       const diffVDOM = diffChildren[i];

  //       // 변경 점 조건문
  //       if (typeof initVDOM === 'string' || typeof diffVDOM === 'string') {
  //         // 둘 중 하나라도 텍스트 일 때
  //         // 더 이상 내용을 비교할 필요 없이 VDOM 변경
  //         initChildren[i] = diffVDOM;
  //       } else {
  //         initVDOM.props = diffVDOM.props;

  //         // if (!initVDOM.children.length && diffVDOM.children.length) {
  //         //   initVDOM.children = diffVDOM.children;
  //         // }
  //         updateInitVDOM(initVDOM.children, diffVDOM.children);
  //       }
  //     }
  //   }
  // };

  // updateInitVDOM([initVDOM], [diffVDOM]);
  // // updateDOM 구현
  // updateDOM(getInitVDOM());
};

export default updateVDOM;
