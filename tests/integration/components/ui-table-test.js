import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | ui-table', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    let columns = [{
      label: 'First Name',
      valuePath: 'firstName',
    }, {
      label: 'Last Name',
      valuePath: 'lastName',
    }]
    this.set('columns', columns);
    await render(hbs`{{ui-table columns=columns}}`);

    assert.equal(this.element.querySelectorAll('th').length, 2);

  });
});
