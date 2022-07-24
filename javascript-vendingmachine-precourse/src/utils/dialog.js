export default class Dialog {
  static show(message) {
    window.alert(message);
  }
  static error({ message }) {
    window.alert(message);
  }
}
