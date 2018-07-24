import DS from "ember-data";
import config from "../config/environment";
//const jsonUrl = config.APP.jsonUrl;
// const jsonUrl = "https://gist.githubusercontent.com/" +
//   "Rio517/c523873cd4495456a88cac8f1860461b/raw/" +
//   "be008bc9ba648456c282228b463415f37b2373aa/checks.json";
const jsonUrl = "https://updown.io/api/checks?api-key=ro-pz3x1zy4ae63yhygraqe";
export default DS.RESTAdapter.extend({
  urlForFindAll(modelName, snapshot) {
    return jsonUrl;
  }
});
