import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ГорячиеНапиткиMixin
} from '../mixins/regenerated/models/i-i-s-bazanov-sava1-горячие-напитки';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГорячиеНапиткиMixin, Validations, {
});

defineProjections(Model);

export default Model;
