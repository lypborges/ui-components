// BEGIN-SNIPPET docs-select.js
import Controller from '@ember/controller';
import {
  task
} from 'ember-concurrency';
import fetch from 'fetch';

export default Controller.extend({
  searchRemote: task(function*(term) {
    let url = `https://api.github.com/search/repositories?q=${term}`;
    let response = yield fetch(url).then((resp) => resp.json()).then((json) => json.items);
    return response;
  }).drop(),
  actions: {
    myChangeAction(selected) {
      this.set('selected', selected);
    },
  }
});
// END-SNIPPET
