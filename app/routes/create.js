import Route from '@ember/routing/route'

export default Route.extend({
  text: '',
  actions: {
    saveNewExample (text) {
      console.log('saveNewExample invoked')
      console.log('newExample is', text)
      const object = {
        text: text
      }
      const record = this.get('store').createRecord('example', object)
      record.save()
    }
  }
})
