//BEGIN-SNIPPET ui-table-controller
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
   }, {
     label: 'Address',
     valuePath: 'address',
   }, {
     label: 'State',
     valuePath: 'state',
   }, {
     label: 'Country',
     valuePath: 'country',
   }];
 })
});
//END-SNIPPET
