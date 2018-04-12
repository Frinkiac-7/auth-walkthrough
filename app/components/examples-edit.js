import Component from '@ember/component';

export default Component.extend({
  actions: {
    editEntry (item) {
      console.log('Invoking editEntry')
      console.log('item is', item)
      console.log('example is', this.get('example'))
      this.sendAction('editEntry', item)
    }
  }
})
