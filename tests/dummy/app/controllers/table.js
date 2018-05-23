import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  columns: computed(function() {
   return [{
     width: '40px',
     sortable: false,
     cellComponent: 'ui-row-toggle',
     breakpoints: ['mobile', 'tablet', 'desktop']
   }, {
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
