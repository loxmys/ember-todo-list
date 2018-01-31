import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    deleteTask: function (id) {
      this.get('store').findRecord('task', id, { backgroundReload: false }).then(function(task) {
        task.destroyRecord();
      });
    },
    closeTask: function (id) {
      this.get('store').findRecord('task', id).then(function(data) {
        data.set('isCompleted', true);
      });
    },
    reopenTask: function (id) {
      this.get('store').findRecord('task', id).then(function(data) {
        data.set('isCompleted', false);
      });
    },
    dropDownClick: function () {
      let element = $(event.target);
      element.siblings('.dropdown-pane').toggleClass('is-open');
      element.find('.dropdown-pane').toggleClass('is-open');
    },
  },
  model() {
    return  this.store.findAll('task');
  }
});
