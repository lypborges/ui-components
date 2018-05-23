import Controller from '@ember/controller';
import {
  task
} from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  searchRemote: task(function*() {
    return yield this.get('store').query('user', {}).then((users) => {
      return users;
    });
  }).drop(),
  actions: {
    myChangeAction(selected) {
      this.set('selected', selected);
    },
  }
});
