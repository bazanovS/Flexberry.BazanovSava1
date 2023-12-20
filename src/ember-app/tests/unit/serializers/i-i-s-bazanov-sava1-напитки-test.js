import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-bazanov-sava1-напитки', 'Unit | Serializer | i-i-s-bazanov-sava1-напитки', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-bazanov-sava1-напитки',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-bazanov-sava1-колво-сахара',
    'transform:i-i-s-bazanov-sava1-оплата',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
