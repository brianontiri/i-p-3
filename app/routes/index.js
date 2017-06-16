import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    //loads the question and answer from firebase.
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    //save to firebase.
    saveQuestion3(params) {
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },

    saveAnswer(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },

    //function to update the new-question form.
    update(question, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },
  },
  //Delete  question
  destroyQuestion(question) {
    question.destroyRecord();
    this.transitionTo('index');
  },
  // adding a new review
  saveReview(params) {
      var newReview = this.store.createRecord('review', params);
      newReview.save();
      this.transitionTo('index');
    }
});
