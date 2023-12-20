import EditFormController from 'ember-flexberry/controllers/edit-form';

export default EditFormController.extend({
  parentRoute: 'i-i-s-bazanov-sava1-заказ-l',

  getCellComponent(attr, bindingPath, model) {
    let cellComponent = this._super(...arguments);
    if (attr.kind === 'belongsTo') {
      switch (`${model.modelName}+${bindingPath}`) {
        case 'i-i-s-bazanov-sava1-еда+продукты':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'продукты',
            projection: 'ПродуктыL',
            autocomplete: true,
          };
          break;

        case 'i-i-s-bazanov-sava1-горячие-напитки+напитки':
          cellComponent.componentProperties = {
            choose: 'showLookupDialog',
            remove: 'removeLookupValue',
            displayAttributeName: 'наименование',
            required: true,
            relationName: 'напитки',
            projection: 'НапиткиL',
            autocomplete: true,
          };
          break;

      }
    }

    return cellComponent;
  },
});
