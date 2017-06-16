import Ember from 'ember';

export function noAnswer(params) {
var question = params[0];
if (question.get('answers').get('length')===0){
  return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove"></span>');
}
}

export default Ember.Helper.helper(noAnswer);
