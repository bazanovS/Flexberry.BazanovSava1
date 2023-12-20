import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  сахар: DS.attr('i-i-s-bazanov-sava1-колво-сахара'),
  напитки: DS.belongsTo('i-i-s-bazanov-sava1-напитки', { inverse: null, async: false }),
  заказ: DS.belongsTo('i-i-s-bazanov-sava1-заказ', { inverse: 'горячиеНапитки', async: false })
});

export let ValidationRules = {
  сахар: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-горячие-напитки.validations.сахар.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  напитки: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-горячие-напитки.validations.напитки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  заказ: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-горячие-напитки.validations.заказ.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГорячиеНапиткиE', 'i-i-s-bazanov-sava1-горячие-напитки', {
    сахар: attr('Сахар', { index: 0 }),
    напитки: belongsTo('i-i-s-bazanov-sava1-напитки', 'Напитки', {
      наименование: attr('Наименование', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
