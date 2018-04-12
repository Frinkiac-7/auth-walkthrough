import DS from 'ember-data'

export default DS.Model.extend({
  // id: DS.attr(),
  text: DS.attr(),
  user_id: DS.attr(),
  created_at: DS.attr(),
  updated_at: DS.attr(),
  user: DS.belongsTo('user')
})
