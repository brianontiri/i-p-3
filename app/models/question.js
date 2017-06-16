import DS from 'ember-data';

export default DS.Model.extend({
  question_area: DS.attr(),
  author: DS.attr(),
  additional_notes: DS.attr(),
  answers: DS.hasMany('answer', { async: true }),
   reviews: DS.hasMany('review', { async: true }),
    // rating: DS.attr()
});
