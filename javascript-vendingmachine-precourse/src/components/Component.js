import { getItem, setItem } from '../utils/localStorage.js';

export default class Component {
  $target;
  $state;
  $props;
  $style;
  $componentName;

  constructor($componentName, $target, $props) {
    this.$componentName = $componentName;
    this.$target = $target;
    this.$props = $props;
    this.setup();
    this.setEvent();
    this.render();
  }

  setup() {}
  mounted() {}
  template() {
    return '';
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  setState(newState) {
    const updatedState = { ...getItem(this.$componentName), ...newState };
    setItem(this.$componentName, updatedState);
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = target =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, e => {
      if (!isTarget(e.target)) return false;
      callback(e);
    });
  }
}
