m = require("./mathma")
test = require("tape")

test "subtracts the numbers", (t)->
  t.equal(m.subtract(), 42, "43 - 1 should be 42")
  t.end()
