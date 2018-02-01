import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import Service from '@ember/service';

describe('Unit | Component | todo row component', function() {

  setupComponentTest('todo-row-component', {
    unit: true
  });
  const mockTodoRowService = Service.extend({
    deleteTask(id) {
      return id;
    },
    closeTask(id){
      return id;
    },
    reopenTask(id) {
      return id;
    },
  });

  beforeEach(function() {
    this.register('service:todo-row', mockTodoRowService);
    this.inject.service('todo-row');
  });

  it('call service deleteTask', function() {
    let component = this.subject();
    this.render();
    let data = component.actions.deleteTask.call(component, 1);
    expect(data).to.equal(1);
  });

  it('call service closeTask', function() {
    let component = this.subject();
    this.render();
    let data = component.actions.closeTask.call(component, 1);
    expect(data).to.equal(1);
  });

  it('call service reopenTask', function() {
    let component = this.subject();
    this.render();
    let data = component.actions.reopenTask.call(component, 1);
    expect(data).to.equal(1);
  });

});
