import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'coffee',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'coffee',
          title: 'coffee'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
