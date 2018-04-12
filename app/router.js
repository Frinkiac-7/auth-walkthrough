import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('users')
  this.route('examples', function () {})
  this.route('example', {path: '/examples/:examples_id'})
  this.route('create', {path: '/examples/create'})
  this.route('delete', {path: '/examples/delete/:examples_id'})
})

export default Router
