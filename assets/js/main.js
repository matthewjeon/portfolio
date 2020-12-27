/* nav */
function navbar(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function(){
    setTimeout(function(){ navbar(); });
  });
  $(window).on('resize', function(){
    setTimeout(function(){ navbar(); }, 500);
  });
  $(".navbar-toggler").click(function(){
    setTimeout(function(){ navbar(); });
  });

/* mainpage */
$(document).ready(function(){
  var boxArray = $('.box');
  var fixedText = "Portfolio by Hoseob Jeon."; //your text here
  var randomText = "abcdefghijklmnopqrstuvwxyz0123456789$#@%&<>,?/+~!\;,{*}"; //the randomtext you want
  var clickDisable = true;
  var startTime, largestDuration;
  function ani(){
    $('.click')[0].classList.add('ani-button')
  }
  function frames(){
    function intGet(multiplier){
      return Math.floor(Math.random() * multiplier)
    };
    var animationDuration = intGet(2500) + 500; //0-(range) + constant = 500-3000ms
    var timeBetweenFrames = intGet(100) + 50; //0-(range) + constant = 50-150ms
    var totalFrames = Math.floor(animationDuration/timeBetweenFrames);
    return [timeBetweenFrames, totalFrames, animationDuration]; // frameAttr[0,1,2]
  };
  function start(){
    largestDuration = 0;
    Array.prototype.forEach.call(boxArray, function(el, index) {
      var frameAttr = frames();
      if(frameAttr[2] > largestDuration){
        largestDuration = frameAttr[2];
      };
      function timeout(){
        setTimeout(function(){
          if(frameAttr[1]--,frameAttr[1]!=0){
            boxArray[index].innerHTML = randomText.charAt(Math.floor(Math.random() * randomText.length));
            timeout();
          }else{
            boxArray[index].innerHTML = fixedText.charAt(index);
          };
        },frameAttr[0]);
      };
      timeout();
    });
    startTime = Date.now();
    setTimeout(function(){
      clickDisable = false;
      $('.click')[0].classList.remove('ani-button')
    },largestDuration);
  };
  start();
});