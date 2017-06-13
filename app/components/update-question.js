import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    // Loop through the question form
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    // Set the updated input to values
    update(question) {
      var params = {
        question_area: this.get('question_area'),
        author: this.get('author'),
        additional_notes: this.get('additional_notes'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
