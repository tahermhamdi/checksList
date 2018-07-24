import DS from "ember-data";

export default DS.RESTSerializer.extend({
  normalizeSingleResponse(store, primaryModelClass, payload, id, requestType) {
    let typeKey = primaryModelClass.modelName;
    let ret = {};
    payload.forEach((item, idx) => {
      item.id = idx;
    });
    ret[typeKey] = payload;
    return this._normalizeResponse(
      store,
      primaryModelClass,
      ret,
      id,
      requestType,
      true
    );
  },

  normalizeArrayResponse(store, primaryModelClass, payload, id, requestType) {
    let pluralTypeKey = Ember.Inflector.inflector.pluralize(
      primaryModelClass.modelName
    );
    let ret = {};
    payload.forEach((item, idx) => {
      item.id = idx;
    });
    ret[pluralTypeKey] = payload;
    return this._normalizeResponse(
      store,
      primaryModelClass,
      ret,
      id,
      requestType,
      false
    );
  }
});
