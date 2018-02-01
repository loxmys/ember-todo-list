import Component from '@ember/component';
import { inject as service } from '@ember/service';
export default Component.extend({
  todoRowService: service('todo-row'),
  dropDownOpened: false,
  tagName: '',
  actions: {
    deleteTask: function (id) {
      return this.get('todoRowService').deleteTask(id);
    },
    closeTask: function (id) {
      return this.get('todoRowService').closeTask(id);
    },
    reopenTask: function (id) {
      return this.get('todoRowService').reopenTask(id);
    },
    dropDownClick: function () {
      this.set('dropDownOpened', !this.get('dropDownOpened'));
    },
  },
});
