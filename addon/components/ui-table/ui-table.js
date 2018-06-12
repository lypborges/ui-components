import Component from '@ember/component';
import layout from 'ui-components/templates/components/ui-table/ui-table';
import {
  computed
} from '@ember/object';
import {
  isEmpty
} from '@ember/utils';
import {
  inject as service
} from '@ember/service';
import Table from 'ember-light-table';
import {
  task
} from 'ember-concurrency';
import {
  A
} from '@ember/array';

export default Component.extend({
  layout,
  store: service(),

  page: 1,
  limit: 10,
  dir: 'asc',
  sort: '',

  isLoading: computed.oneWay('fetchRecords.isRunning'),
  canLoadMore: true,
  enableSync: true,

  model: null,
  meta: null,
  columns: null,
  table: null,

  init() {
    this._super(...arguments);
    this.set('model', A([]));

    let fecthModel = isEmpty(this.get('model'));
    if (fecthModel) {
      this.get('fetchRecords').perform();
    }

    let table = new Table(this.get('columns'), this.get('model'), {
      enableSync: this.get('enableSync')
    });
    let sortColumn = table.get('allColumns').findBy('valuePath', this.get('sort'));

    // Setup initial sort column
    if (sortColumn) {
      sortColumn.set('sorted', true);
    }

    this.set('table', table);
  },

  fetchRecords: task(function*() {
    let url = this.get('modelName');
    if (url) {
      let records = yield this.get('store').query(url, this.getProperties(['page', 'limit', 'sort', 'dir']));
      this.get('model').pushObjects(records.toArray());
      this.set('meta', records.get('meta'));
      this.set('canLoadMore', !isEmpty(records));
    }
  }).restartable(),

  loadMore: task(function*(){
    if (this.get('canLoadMore')) {
      this.incrementProperty('page');
      yield this.get('fetchRecords').perform();
    }
  }).restartable(),

  actions: {
    onColumnClick(column) {
      if (column.sorted) {
        this.setProperties({
          dir: column.ascending ? 'asc' : 'desc',
          sort: column.get('valuePath'),
          canLoadMore: true,
          page: 1
        });
        this.get('model').clear();
        this.get('fetchRecords').perform();
      }
    },

    onAfterResponsiveChange(matches) {
      if (matches.indexOf('jumbo') > -1) {
        this.get('table.expandedRows').setEach('expanded', false);
      }
    }
  }
});
