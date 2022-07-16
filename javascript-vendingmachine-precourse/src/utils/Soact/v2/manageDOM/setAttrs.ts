import { makeClassName, convertKebabToCamel } from '../../../lib';

const setAttrs = (props: SoactDomAttribute | null, $el: HTMLElement) => {
  if (!props) {
    return;
  }
  for (const attr of Object.values($el.attributes)) {
    const tmpAttrName = attr.name as keyof DOMAttribute;
    if (!props[tmpAttrName] && attr.value !== 'undefined') {
      $el.removeAttribute(tmpAttrName);
    } else if (props[tmpAttrName] && attr.value !== 'undefined') {
      if (Object.is(`${props[tmpAttrName]}`, attr.value)) {
        delete props[tmpAttrName];
      }
    }
  }

  const attrList = Object.entries(props);
  for (const [propName, propValue] of attrList) {
    if (propName.includes('data-')) {
      $el.dataset[convertKebabToCamel(propName.replace('data-', ''))] =
        propValue;
    }
    const tmpPropName = propName as keyof DOMAttribute;
    if (tmpPropName === 'className' && Array.isArray(propValue)) {
      $el[tmpPropName] = makeClassName(propValue);
    } else {
      $el[tmpPropName] = propValue;
    }
  }
};

export default setAttrs;
