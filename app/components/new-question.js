import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
    actions: {
      // Display form once addNewQuestion is true .
      questionFormShow() {
        this.set('addNewQuestion', true);
      },
    // Collect the data entered in the input fields and sets them as values.
      saveQuestion1() {
        var params = {
          question_area: this.get('question_area'),
          author: this.get('author'),
          additional_notes: this.get('additional_notes'),
        };
        this.set('addNewQuestion', false);
        this.sendAction('saveQuestion2', params);
      }
    }
});
