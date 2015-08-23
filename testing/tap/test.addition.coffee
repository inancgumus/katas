m = require("./mathma")
test = require("tape")

test "adds up the numbers", (t)->
  t.equal(m.add(), 42, "41 + 1 should be 42")
  t.end()
