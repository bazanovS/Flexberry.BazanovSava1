import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  наименование: DS.attr('string'),
  состав: DS.attr('string'),
  цена: DS.attr('decimal')
});

export let ValidationRules = {
  наименование: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-напитки.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состав: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-напитки.validations.состав.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  цена: {
    descriptionKey: 'models.i-i-s-bazanov-sava1-напитки.validations.цена.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НапиткиE', 'i-i-s-bazanov-sava1-напитки', {
    наименование: attr('Наименование', { index: 0 }),
    состав: attr('Состав', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });

  modelClass.defineProjection('НапиткиL', 'i-i-s-bazanov-sava1-напитки', {
    наименование: attr('Наименование', { index: 0 }),
    состав: attr('Состав', { index: 1 }),
    цена: attr('Цена', { index: 2 })
  });
};
