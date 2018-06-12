import Component from '@ember/component';
import layout from '../templates/components/ui-select';

export default Component.extend({
  layout,
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
  defaultOnChange(selected) {
    this.set('selected', selected);
  }
});
