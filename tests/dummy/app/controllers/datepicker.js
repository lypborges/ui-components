import Controller from '@ember/controller';

export default Controller.extend({
  altFormat: 'd-m-Y',
  init() {
    this._super(...arguments);
    let locale = {
      code: "pt",
      label: "Portugues"
    };
    let locales = [{
      code: "pt",
      label: "Portugues"
    }, {
      code: "ru",
      label: "Russian"
    }];
    this.set('locale', locale);
    this.set('locales', locales);
  },
});
