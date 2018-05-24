import Controller from '@ember/controller';
import {
  task, timeout
} from 'ember-concurrency';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  searchRemote: task(function*() {
    yield timeout(800);
    return yield this.get('store').query('user', {}).then((users) => {
      return users;
    });
  }).restartable(),
  actions: {
    myChangeAction(selected) {
      this.set('selected', selected);
    },
  }
});
