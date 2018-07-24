import Route from "@ember/routing/route";

export default Route.extend({
  model() {
    //return [1, 2, 3, 4, 5];

    return this.store.findAll("check").then(results =>
      results.filter(check => {
        let currentToken = check.get("token");
        let currentAlias = check.get("alias");
        $.getJSON("/descriptions.json").then(desc => {
          if (desc[currentToken]) {
            check.set("token", desc[currentToken]);
          } else {
            check.set("token", "");
          }
          check.set("link", "https://updown.io/" + currentToken);
        });

        return !check.get("alias").includes("hacked");
      })
    );
  }
});
