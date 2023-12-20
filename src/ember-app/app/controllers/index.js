import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.клиентам.caption'),
          title: i18n.t('forms.application.sitemap.клиентам.title'),
          children: [{
            link: 'i-i-s-bazanov-sava1-заказ-l',
            caption: i18n.t('forms.application.sitemap.клиентам.i-i-s-bazanov-sava1-заказ-l.caption'),
            title: i18n.t('forms.application.sitemap.клиентам.i-i-s-bazanov-sava1-заказ-l.title'),
            icon: 'list',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.сотрудникам.caption'),
          title: i18n.t('forms.application.sitemap.сотрудникам.title'),
          children: [{
            link: 'i-i-s-bazanov-sava1-продукты-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-bazanov-sava1-продукты-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-bazanov-sava1-продукты-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-bazanov-sava1-напитки-l',
            caption: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-bazanov-sava1-напитки-l.caption'),
            title: i18n.t('forms.application.sitemap.сотрудникам.i-i-s-bazanov-sava1-напитки-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})