import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  columns: computed(function() {
   return [{
     label: 'First Name',
     valuePath: 'firstName',
   }, {
     label: 'Last Name',
     valuePath: 'lastName',
     breakpoints: ['tablet', 'desktop', 'jumbo']
   }, {
     label: 'Address',
     valuePath: 'address',
     breakpoints: ['tablet', 'desktop', 'jumbo']
   }, {
     label: 'State',
     valuePath: 'state',
     breakpoints: ['desktop', 'jumbo']
   }, {
     label: 'Country',
     valuePath: 'country',
     breakpoints: ['jumbo']
   }];
 })
});
