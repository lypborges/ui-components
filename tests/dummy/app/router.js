import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('button');
  this.route('select');
  this.route('table');
  this.route('datepicker');
  this.route('daterange');
});


export default Router;
