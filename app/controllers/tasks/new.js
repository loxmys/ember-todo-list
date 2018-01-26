import Controller from '@ember/controller';
export default Controller.extend({
  selectedOption: 'minor',
  title: null,
  description: null,
  actions: {
    createTask: function() {
      let title = this.get('title');
      let description = this.get('description');
      let selectedOption = this.get('selectedOption');

      var task = this.store.createRecord('task', {
        title: title,
        description: description,
        priority: selectedOption,
        isCompleted: false
      });
      task.save();

    },
    setSelection: function (selected) {
      this.set('selectedOption', selected);
    }
  },

});
