import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { inject as service } from '@ember/service';
// import { run } from '@ember/runloop';
moduleForComponent('task-list-component', 'Integration | Component | task list component', {
  integration: true,
  store: service('store'),
});

test('it renders all tasks', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: true },
    { id: 2, title: 'Task_2', description: 'Description 2', priority: 'critical', isCompleted: false },
    { id: 3, title: 'Task_3', description: 'Description 3', priority: 'major', isCompleted: false }
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody tr').length, 3);
});

test('it renders task completed style', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: true },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody td:first').hasClass('task-comleted'), true);
});

test('it renders task uncompleted style', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: false },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody td:first').hasClass('task-comleted'), false);
});

test('it renders task completed button', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: true },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody td:last button:first').text().trim(), 'Reopen');
});

test('it renders task uncompleted button', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: false },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody td:last button:first').text().trim(), 'Close');
});

test('it renders task completed button', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: true },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody td:last button:first').text().trim(), 'Reopen');
});

test('it renders task minor priority style', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'minor', isCompleted: false },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody tr:first').hasClass('minor'), true);
});

test('it renders task critical priority style', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'critical', isCompleted: false },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody tr:first').hasClass('critical'), true);
});

test('it renders task major priority style', function(assert) {
  this.set('task-list', [
    { id: 1, title: 'Task_1', description: 'Description 1', priority: 'major', isCompleted: false },
  ]);

  this.render(hbs`{{task-list-component task-list=task-list}}`);
  assert.equal(this.$('tbody tr:first').hasClass('major'), true);
});


