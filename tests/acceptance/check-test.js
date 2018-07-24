import { module, test } from "qunit";
import { visit, currentURL } from "@ember/test-helpers";
import { setupApplicationTest } from "ember-qunit";

module("Acceptance | check", function(hooks) {
  setupApplicationTest(hooks);

  test("visiting /check", async function(assert) {
    await visit("/check");

    assert.equal(currentURL(), "/check");
  });
});
