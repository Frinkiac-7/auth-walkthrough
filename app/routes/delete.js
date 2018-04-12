import Route from '@ember/routing/route';

export default Route.extend({
  model (params) {
    console.log('params', params.examples_id)
    console.log('return is', this.get('store').findRecord('example', params.examples_id))
    // go get the necessary list
    return this.get('store').findRecord('example', params.examples_id)
  },
  actions: {
    deleteEntry (model) {
      console.log('Invoking editEntry')
      console.log('model is', model)
      model.destroyRecord()
      // this.sendAction('editEntry', model)
    }
  }
})
