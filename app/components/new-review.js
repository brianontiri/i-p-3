import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       author: this.get('author'),
       rating: this.get('rating'),
       content: this.get('content'),
      question: this.get('question')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
