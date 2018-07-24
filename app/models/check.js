import DS from "ember-data";

export default DS.Model.extend({
  alias: DS.attr("string"),
  token: DS.attr("string"),
  down: DS.attr("boolean"),
  down_since: DS.attr("string"),
  uptime: DS.attr("number"),
  link: DS.attr("string")
});
