import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISBazanovSava1ЗаказLForm from './forms/i-i-s-bazanov-sava1-заказ-l';
import IISBazanovSava1НапиткиLForm from './forms/i-i-s-bazanov-sava1-напитки-l';
import IISBazanovSava1ПродуктыLForm from './forms/i-i-s-bazanov-sava1-продукты-l';
import IISBazanovSava1ЗаказEForm from './forms/i-i-s-bazanov-sava1-заказ-e';
import IISBazanovSava1НапиткиEForm from './forms/i-i-s-bazanov-sava1-напитки-e';
import IISBazanovSava1ПродуктыEForm from './forms/i-i-s-bazanov-sava1-продукты-e';
import IISBazanovSava1ГорячиеНапиткиModel from './models/i-i-s-bazanov-sava1-горячие-напитки';
import IISBazanovSava1ЕдаModel from './models/i-i-s-bazanov-sava1-еда';
import IISBazanovSava1ЗаказModel from './models/i-i-s-bazanov-sava1-заказ';
import IISBazanovSava1НапиткиModel from './models/i-i-s-bazanov-sava1-напитки';
import IISBazanovSava1ПродуктыModel from './models/i-i-s-bazanov-sava1-продукты';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-bazanov-sava1-горячие-напитки': IISBazanovSava1ГорячиеНапиткиModel,
    'i-i-s-bazanov-sava1-еда': IISBazanovSava1ЕдаModel,
    'i-i-s-bazanov-sava1-заказ': IISBazanovSava1ЗаказModel,
    'i-i-s-bazanov-sava1-напитки': IISBazanovSava1НапиткиModel,
    'i-i-s-bazanov-sava1-продукты': IISBazanovSava1ПродуктыModel
  },

  'application-name': 'coffee',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'coffee',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'coffee',
          title: 'coffee'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        клиентам: {
          caption: 'Клиентам',
          title: 'Клиентам',
          'i-i-s-bazanov-sava1-заказ-l': {
            caption: 'Заказ',
            title: ''
          }
        },
        сотрудникам: {
          caption: 'Сотрудникам',
          title: 'Сотрудникам',
          'i-i-s-bazanov-sava1-продукты-l': {
            caption: 'Продукты',
            title: ''
          },
          'i-i-s-bazanov-sava1-напитки-l': {
            caption: 'Напитки',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-bazanov-sava1-заказ-l': IISBazanovSava1ЗаказLForm,
    'i-i-s-bazanov-sava1-напитки-l': IISBazanovSava1НапиткиLForm,
    'i-i-s-bazanov-sava1-продукты-l': IISBazanovSava1ПродуктыLForm,
    'i-i-s-bazanov-sava1-заказ-e': IISBazanovSava1ЗаказEForm,
    'i-i-s-bazanov-sava1-напитки-e': IISBazanovSava1НапиткиEForm,
    'i-i-s-bazanov-sava1-продукты-e': IISBazanovSava1ПродуктыEForm
  },

});

export default translations;
