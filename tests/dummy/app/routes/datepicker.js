import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.findRecord('user', 1);
  }
});
