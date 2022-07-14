import makeClassName from '../../../lib/makeClassName';

const setAttrs = (
  props: SoactDomAttribute | SoactDomAttributeList | null,
  $el: HTMLElement
) => {
  if (!props) {
    return;
  }

  const attrList = Array.isArray(props) ? props : Object.entries(props);

  for (const [propName, propValue] of attrList) {
    const tmpPropName = propName as keyof DOMAttribute;
    if (tmpPropName === 'className' && Array.isArray(propValue)) {
      $el[tmpPropName] = makeClassName(propValue);
    } else {
      $el[tmpPropName] = propValue;
    }
  }
};

export default setAttrs;
