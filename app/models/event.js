import DS from 'ember-data';

export default DS.Model.extend({
  location: DS.attr('string'),
  host: DS.attr('string'),
  date: DS.attr('string'),
  time: DS.attr('string'),
  description: DS.attr('string')
});
