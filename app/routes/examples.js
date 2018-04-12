import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    return this.get('store').findAll('example')
    // remember to make this  ^^^^^^^^^ singular because of fucking stupid reasons
  },
  actions: {
    saveChange (item) {
      console.log('invoking saveChange for editEntry action')
      console.log('item is', item)
      item.save()
    }
  }
})
