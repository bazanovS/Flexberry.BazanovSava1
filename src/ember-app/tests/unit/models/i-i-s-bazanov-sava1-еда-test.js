import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanov-sava1-еда', 'Unit | Model | i-i-s-bazanov-sava1-еда', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-bazanov-sava1-горячие-напитки',
    'model:i-i-s-bazanov-sava1-еда',
    'model:i-i-s-bazanov-sava1-заказ',
    'model:i-i-s-bazanov-sava1-напитки',
    'model:i-i-s-bazanov-sava1-продукты',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
