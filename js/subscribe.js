// common tasks
$(function(){
  $("img").closest("p").css({"text-align": "center"})
})

// min-height
$(window).resize(function() {
  $('#container').css({'min-height': $('html').height() - $('header').outerHeight(true) - $('footer').outerHeight(true)})
})

$(window).trigger('resize')

$(function() {
  $("input[type='search']").keyup(function(e) {
    if(e.which === 13){
      $(this).closest("form").submit();
    } 
  })
})

$(function() {
  if (window.location.pathname != '/') {
    return
  }
  function openArticle(e) {
    e.preventDefault()
    $(this).closest(".article-content").find(".article-more-link a")[0].click()
  }
  $(".article-content p").not('.article-more-link').css({'cursor': 'pointer'}).click(openArticle)
  $(".article-content p").not('.article-more-link').find('a').click(openArticle)
})

$(function() {
  $("#totop").css({"right": $("#asidepart").offset().right})
  var threadhold = $('#asidepart').offset().top + $('#asidepart').outerHeight() + 67
  if ($('#asidepart').css('float') == 'none') {
    return
  }
  if ($('#asidepart').outerHeight() + 500 >= $("#main").outerHeight()) {
    return
  }
  var adjust = function() {
    if ($('body').scrollTop() + $(window).height() >= threadhold) {
      if ($('#asidepart').css('position') == 'fixed') {
        return
      }
      $('#asidepart').css({'margin': $('#asidepart').css('margin'), 'width': $('#asidepart').width(), 'position': 'fixed', 'bottom': '67px', "left": $("#asidepart").position().left + 'px'})
    }
    else {
      $('#asidepart').css({'width': '18%', 'position': 'relative', 'bottom': 'auto', 'left': 'auto'})
    }
  }
  $(window).on('scroll', adjust)
  $(window).resize(function() {
    if (window.matchMedia("(max-width: 1280px)").matches) {
      $(window).off('scroll', adjust)
      $('#asidepart').css({'width': 'auto', 'position': 'relative', 'bottom': 'auto', 'left': 'auto', 'margin': '1em 0 0', 'padding': '0.5em 2% 1em',})
    }
  })
})