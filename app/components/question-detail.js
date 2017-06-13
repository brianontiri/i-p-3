import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // Confirm delete
   delete(question) {
     if (confirm('Are you sure you want to delete this?')) {
       this.sendAction('destroyQuestion', question);
     }
   },
  
 }
});
