import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('reviews').get('length') >= 5) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-star"></span>');
  }
}


export default Ember.Helper.helper(questionPopularity);
