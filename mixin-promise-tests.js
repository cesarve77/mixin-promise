// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by mixin-promise.js.
import { name as packageName } from "meteor/cesarve:mixin-promise";

// Write your tests here!
// Here is an example.
Tinytest.add('mixin-promise - example', function (test) {
  test.equal(packageName, "mixin-promise");
});
