import Service from '@ember/service';
import { inject as service } from '@ember/service';
export default Service.extend({
  store: service('store'),
  deleteTask(id) {
    return this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(task) {
      return task.destroyRecord().then(function () {
      });
    })
  },
  closeTask(id){
    return this.get('store').findRecord('task', id).then(function(data) {
      return data.set('isCompleted', true);
    });
  },
  reopenTask(id) {
    return this.get('store').findRecord('task', id).then(function(data) {
      return data.set('isCompleted', false);
    });
  },
  createTask(title, description, selectedOption) {
    const task = this.get('store').createRecord('task', {
      title: title,
      description: description,
      priority: selectedOption,
      isCompleted: false
    });
    return task.save();
  },
  findAll() {
    return this.get('store').findAll('task');
  }
});
