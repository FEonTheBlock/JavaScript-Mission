export default class Component {
  $target;
  $state;
  $props;
  $style;
  $componentName;

  constructor($componentName, $target, $props) {
    const localState = JSON.parse(localStorage.getItem($componentName));
    // console.log($componentName, localStorage.getItem($componentName));

    this.$componentName = $componentName;
    this.$target = $target;
    this.$props = $props;
    this.$state = { ...this.$state, ...localState };
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
    this.$state = { ...this.$state, ...newState };
    localStorage.setItem(this.$componentName, JSON.stringify(this.$state));
    // console.log(this.$componentName, JSON.stringify(this.$state));

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
