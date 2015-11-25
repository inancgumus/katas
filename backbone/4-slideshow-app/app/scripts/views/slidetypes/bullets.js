define(['backbone'], function(Backbone) {

	var BulletsSlide = Backbone.View.extend({

    render: function() {
      var el = this.$el;

      return el
        .addClass('bullets')
        .append([
          '<ul>',
            '<li>' + this.model.get('bullets').join('</li><li>'),
          '</ul>'
        ].join(''));    }

  });

  return BulletsSlide;

});
