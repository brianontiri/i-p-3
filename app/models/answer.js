import DS from 'ember-data';

export default DS.Model.extend({
  answer_area: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', {async: true }),
  // rating: DS.attr()
});
