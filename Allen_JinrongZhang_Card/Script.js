$(document).ready(function() {
  var getlearningHeight = $('.learning.active').height();

  $('.learnings').css({
    height: getlearningHeight
  });

  function calclearningHeight() {
    getlearningHeight = $('.learning.active').height();

    $('.learnings').css({
      height: getlearningHeight
    });
  }
// Specifying animations is easy
  function animateContentColor() {
    var getlearningColor = $('.learning.active').attr('learning-color');

    $('body').css({
      background: getlearningColor
    });

    $('.title').css({
      color: getlearningColor
    });

    $('.btn').css({
      color: getlearningColor
    });
  }

  var learningItem = $('.learning'),
    learningCurrentItem = learningItem.filter('.active');

  $('#next').on('click', function(e) {
    e.preventDefault();

    var nextItem = learningCurrentItem.next();

    learningCurrentItem.removeClass('active');
 // If you want it to loop around
    if (nextItem.length) {

      learningCurrentItem = nextItem.addClass('active');
    } else {
      learningCurrentItem = learningItem.first().addClass('active');
    }

    calclearningHeight();
    animateContentColor();
  });

  $('#prev').on('click', function(e) {
    e.preventDefault();

    var prevItem = learningCurrentItem.prev();

    learningCurrentItem.removeClass('active');
    if (prevItem.length) {
      learningCurrentItem = prevItem.addClass('active');
    } else {
      learningCurrentItem = learningItem.last().addClass('active');
    }

    calclearningHeight();
    animateContentColor();
  });

  // Ripple
  $('[ripple]').on('click', function(e) {
    var rippleDiv = $('<div class="ripple" />'),
      rippleSize = 60,
      rippleOffset = $(this).offset(),
      rippleY = e.pageY - rippleOffset.top,
      rippleX = e.pageX - rippleOffset.left,
      ripple = $('.ripple');

    rippleDiv.css({
      top: rippleY - (rippleSize / 2),
      left: rippleX - (rippleSize / 2),
      background: $(this).attr("ripple-color")
    }).appendTo($(this));

    window.setTimeout(function() {
      rippleDiv.remove();
    }, 1900);
  });
});
