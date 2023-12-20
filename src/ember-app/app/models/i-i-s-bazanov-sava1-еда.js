import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ЕдаMixin
} from '../mixins/regenerated/models/i-i-s-bazanov-sava1-еда';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ЕдаMixin, Validations, {
});

defineProjections(Model);

export default Model;
