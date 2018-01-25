import { moduleForModel, test } from 'ember-qunit';

moduleForModel('task', 'Unit | Model | task', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

test('it has an attribute: title', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('title') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: description', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('description') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: priority', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('priority') > -1;
  assert.ok(hasAttr);
});

test('it has an attribute: isCompleted', function(assert) {
  let model = this.subject();
  let hasAttr = Object.keys(model.toJSON()).indexOf('isCompleted') > -1;
  assert.ok(hasAttr);
});
