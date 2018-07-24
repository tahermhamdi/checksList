import Controller from "@ember/controller";
import { computed } from "@ember/object";

export default Ember.Controller.extend({
  sortProperties: ["token:desc"],
  sortedStats: Ember.computed.sort("model", "sortProperties"),
  actions: {
    sortBy: function(sortProperties) {
      this.set("sortProperties", [sortProperties]);
    }
  }
});
