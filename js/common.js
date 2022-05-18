$(function(){
  console.log($("body"));
  console.log(window.location.href);

  function splitLocation(name){
    let href = name.attr("href").split("/");
    href = href[href.length-1].split(".")[0];
    return href;
  }

  let currentHref = splitLocation($(location));

  $("#lnb a").each(function(){
    if ( currentHref == splitLocation($(this)) ) {
      $(this).addClass("on");
    }
  })
  $("dd:not(:first)").css({"display":"none", "height":0 });
  $(".accordion dl dt").click(function(){
    let thisElem = $(this);
    if ( $("+dd",thisElem).css("display") == "none" ) {
      let isAni = $("dd").is(":animated");
      if ( !isAni ) {
        $("dd").each(function(){
          if ( $(this).css("height") == "300px" ) {  // or parseInt($(this).css("height")) == 300
            $(this).animate( { height: "0"}, 400,function(){
              $(this).css("display","none");
            });
          }
        })
        $("+dd",thisElem).css("display", "block").animate( {height: 300}, 300);
      }

    }
  })
})
