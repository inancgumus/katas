var el = function() {
  return {
    $el: {},
    create: function create(tag, attrs) {
      this.$el = document.createElement(tag)
      if (attrs) {
        setAttributes(this.$el, attrs)
      }
      return this.$el
    },
    pos: function pos(newPos) {
      this.$el.style.top = newPos.top
      this.$el.style.left = newPos.left
      return this
    },
    appendToBody: function appendToBody() {
      document.body.appendChild(this.$el)
    }
  }
}

function setAttributes(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}
