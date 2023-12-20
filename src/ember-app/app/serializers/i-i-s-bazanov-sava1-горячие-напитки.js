import { Serializer as ГорячиеНапиткиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-bazanov-sava1-горячие-напитки';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГорячиеНапиткиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
