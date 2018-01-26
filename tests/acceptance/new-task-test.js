import { test } from 'qunit';
import moduleForAcceptance from 'ember-todo-list/tests/helpers/module-for-acceptance';
import $ from 'jquery';
moduleForAcceptance('Acceptance | new task');

test('visiting /new-task', function(assert) {
  visit('/tasks/new');

  andThen(function() {
    assert.equal(currentURL(), '/tasks/new');
  });
});

test('should add new task', function(assert) {
  visit('/tasks/new');
  andThen(() => assert.equal($('tbody tr').length, 3, 'start task count'));
  fillIn('.new-task input', 'New test task');
  fillIn('.new-task textarea', 'New test task11');
  click('.new-task button');
  andThen(() => assert.equal(find('tbody tr:last td:first').text().trim(), 'New test task'));
  andThen(() => assert.equal($('tbody tr').length, 4, 'task count +1'));
});

test('should delete task', function(assert) {
  visit('/tasks/new');
  andThen(() => assert.equal($('tbody tr').length, 3, 'start task count'));
  click('tbody td:last button:last');
  andThen(() => assert.equal($('tbody tr').length, 2, 'after delete task count'));
});

test('should replace cell decoration', function(assert) {
  visit('/tasks/new');
  andThen(() => assert.equal($('tbody tr:first td:first').hasClass('task-comleted'), true, ' completed task decoration'));
  andThen(() => assert.equal($('tbody tr:first td:nth-child(2)').hasClass('task-comleted'), true, 'completed task decoration'));
  click('tbody tr:first td:last button:first');
  andThen(() => assert.equal($('tbody tr:first td:first').hasClass('task-comleted'), false, 'uncompleted task decoration'));
  andThen(() => assert.equal($('tbody tr:first td:nth-child(2)').hasClass('task-comleted'), false, 'uncompleted task decoration'));
  click('tbody tr:first td:last button:first');
  andThen(() => assert.equal($('tbody tr:first td:first').hasClass('task-comleted'), true, ' completed task decoration'));
  andThen(() => assert.equal($('tbody tr:first td:nth-child(2)').hasClass('task-comleted'), true, 'completed task decoration'));
});

test('should add new task and check add priority class', function(assert) {
  visit('/tasks/new');
  fillIn('.new-task input', 'New minor task');
  fillIn('.new-task select', 'minor');
  click('.new-task button');
  andThen(() => assert.equal(find('tbody tr:last').hasClass('minor'), true, 'Check minor class'));

  fillIn('.new-task input', 'New critical task');
  fillIn('.new-task select', 'critical');
  click('.new-task button');
  andThen(() => assert.equal(find('tbody tr:last').hasClass('critical'), true, 'Check critical class'));

  fillIn('.new-task input', 'New major task');
  fillIn('.new-task select', 'major');
  click('.new-task button');
  andThen(() => assert.equal(find('tbody tr:last').hasClass('major'), true, 'Check major class'));
});
