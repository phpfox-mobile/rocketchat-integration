// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by phpfox-integration.js.
import { name as packageName } from "meteor/phpfox:phpfox-integration";

// Write your tests here!
// Here is an example.
Tinytest.add('phpfox-integration - example', function (test) {
  test.equal(packageName, "phpfox-integration");
});
