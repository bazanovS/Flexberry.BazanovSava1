import { Serializer as ПродуктыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bazanov-sava1-продукты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПродуктыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
