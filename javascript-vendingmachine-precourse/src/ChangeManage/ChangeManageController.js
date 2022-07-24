import { $ } from '../utils/dom.js';
import ChangeManageModel from './ChangeManageModel.js';
import ChangeManageView from './ChangeManageView.js';

// 잔돈 충전 service (view, model 사이에서 관리)
export default class ChangeManageController {
  model;
  view;

  constructor() {
    this.model = new ChangeManageModel();
    this.view = new ChangeManageView();
  }

  renderChangeManageMenu() {
    this.model.updateChangeInfo();
    this.view.render(this.model.changeInfo);
    $('#vending-machine-charge-form').addEventListener('submitChange', ({ detail }) =>
      this.onSubmitChange(detail)
    );
  }

  // 잔돈 입력 시, 모델과 뷰 업데이트
  onSubmitChange(changeInput) {
    this.model.setChangeInfo(changeInput);
    this.view.updateChangeInfo(this.model.changeInfo);
  }
}
