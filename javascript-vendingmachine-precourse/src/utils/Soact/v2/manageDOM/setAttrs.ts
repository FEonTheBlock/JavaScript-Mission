import { makeClassName, convertKebabToCamel } from '../../../lib';

const setAttrs = (props: SoactProps, $el: HTMLElement | Text | undefined) => {
  if (!($el instanceof HTMLElement)) {
    return;
  }

  if ($el.attributes?.length) {
    for (const attr of Object.values($el.attributes)) {
      const tmpAttrName = attr.name as keyof DOMAttribute;

      if (props) {
        const propValue = `${props[tmpAttrName]}`;
        if (!propValue || propValue === 'undefined') {
          $el.removeAttribute(attr.name);
        } else if (Object.is(propValue, attr.value)) {
          delete props[tmpAttrName];
        }
      } else {
        $el.removeAttribute(attr.name);
      }
    }
  }

  if (props) {
    for (const [propName, propValue] of Object.entries(props)) {
      if (propName.includes('data-')) {
        $el.dataset[convertKebabToCamel(propName.replace('data-', ''))] =
          propValue;
      }
      const tmpPropName = propName as keyof DOMAttribute;
      if (tmpPropName === 'className') {
        $el[tmpPropName] = makeClassName(propValue);
      }
    }
  }
};

export default setAttrs;
