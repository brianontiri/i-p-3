import Ember from 'ember';

export default Ember.Component.extend({
  // confirm deletion
  actions: {
    delete(question) {
      if (confirm('Are you sure you want to delete this ?')) {
        this.sendAction('destroyQuestion', question);
      }
    },
    destroyReview(review) {
      this.sendAction('destroyReview', review);
    }
  }
});
