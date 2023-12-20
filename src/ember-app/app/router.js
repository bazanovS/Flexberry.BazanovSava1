import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-bazanov-sava1-заказ-l');
  this.route('i-i-s-bazanov-sava1-заказ-e',
  { path: 'i-i-s-bazanov-sava1-заказ-e/:id' });
  this.route('i-i-s-bazanov-sava1-заказ-e.new',
  { path: 'i-i-s-bazanov-sava1-заказ-e/new' });
  this.route('i-i-s-bazanov-sava1-напитки-l');
  this.route('i-i-s-bazanov-sava1-напитки-e',
  { path: 'i-i-s-bazanov-sava1-напитки-e/:id' });
  this.route('i-i-s-bazanov-sava1-напитки-e.new',
  { path: 'i-i-s-bazanov-sava1-напитки-e/new' });
  this.route('i-i-s-bazanov-sava1-продукты-l');
  this.route('i-i-s-bazanov-sava1-продукты-e',
  { path: 'i-i-s-bazanov-sava1-продукты-e/:id' });
  this.route('i-i-s-bazanov-sava1-продукты-e.new',
  { path: 'i-i-s-bazanov-sava1-продукты-e/new' });
});

export default Router;
