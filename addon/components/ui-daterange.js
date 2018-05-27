import Component from '@ember/component';
import layout from '../templates/components/ui-datepicker';
import {
  run
} from '@ember/runloop';

export default Component.extend({
  layout,
  mode: 'range',
  init() {
    this._super(...arguments);
    this.setDefaultActions();
  },
  setDefaultActions(){
    let onChange = this.get('onChange');
    let defaultOnChange = this.get('defaultOnChange');
    if (!onChange) {
      this.set('onChange', defaultOnChange);
    }
  },
  defaultOnChange(selectedDates, stringDate) {
    run.next(() => {
      this.set('dateValue', stringDate);
    });
  }
});
