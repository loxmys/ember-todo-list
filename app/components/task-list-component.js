import Component from '@ember/component';
import { inject as service } from '@ember/service';
import $ from 'jquery';
export default Component.extend({
  store: service('store'),
  actions: {
    deleteTask: function (id) {
      this.sendAction('deleteTask', id);zxczcx
    },
    closeTask: function (id) {
      this.sendAction('closeTask', id);
    },
    reopenTask: function (id) {
      this.sendAction('reopenTask', id);
    },
    dropDownClick: function () {
      let element = $(event.target);
      element.siblings('.dropdown-pane').toggleClass('is-open');
      element.find('.dropdown-pane').toggleClass('is-open');
    },
  },
});
