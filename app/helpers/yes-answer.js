import Ember from 'ember';

export function yesAnswer(params) {
  var question = params[0];
  if (question.get('answers').get('length')>0){
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok"></span>');
  }

}

export default Ember.Helper.helper(yesAnswer);
