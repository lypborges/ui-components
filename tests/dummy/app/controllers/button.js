import Controller from '@ember/controller';
import { task,timeout } from 'ember-concurrency';

export default Controller.extend({
  asyncTask: task(function*() {
   yield timeout(2000);
 }).restartable(),
});
