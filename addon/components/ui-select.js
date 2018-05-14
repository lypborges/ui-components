import Component from '@ember/component';
import layout from '../templates/components/ui-select';

export default Component.extend({
  layout,
  init() {
    this._super(...arguments);
    this.set('cities',['Barcelona', 'London', 'New York', 'Porto']);
    this.set('destination', 'London');
  },
});
