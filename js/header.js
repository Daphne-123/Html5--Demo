/**
 * header.js Header部分交互逻辑
 * @author: 徐梦宇
 * @desc  : 包含`顶部黑边`和`顶部导航栏`
 */

$(function () {
  $(".black-nav").each(function (index, element) {
    $(element).attr("index", index);
  });

  $(".black-nav").click(function () {
    let shouldClose = false;
    if ($(this).attr("class").split(" ").includes("active")) {
      shouldClose = true;
    } else {
      shouldClose = false;
    }

    // 清除所有活动ing状态
    $(".black-nav").removeClass("active");
    $(".black-content div").removeClass("show");

    if (!shouldClose) {
      $(this).addClass("active");
      $(`.content${$(this).attr("index")}`).addClass("show");
    }
  });

  $(".online-shop").mouseover(function () {
    $(".online-buy").removeClass("hidden");
  });
  $(".online-shop").mouseout(function () {
    $(".online-buy").addClass("hidden");
  });

  $(".nav-button").click(function () {
    $(this).addClass("hidden");
    $(".nav-close").removeClass("hidden");
    $(".m-nav-content").removeClass("hidden");
    $("body").addClass('overflow');
  });
  $(".nav-close").click(function () {
    $(this).addClass("hidden");
    $(".nav-button").removeClass("hidden");
    $(".m-nav-content").addClass("hidden");
    $("body").removeClass('overflow')
  });

  $(".search-button.open").click(function () {
    $(this).addClass("hidden");
    $(".search-button.close").removeClass("hidden");
    $(".navbar nav").addClass("hidden");
    $(".online-shop").addClass("hidden");
    $(".search-input").removeClass("hidden");
  });
  $(".search-button.close").click(function () {
    $(this).addClass("hidden");
    $(".search-button.open").removeClass("hidden");
    $(".navbar nav").removeClass("hidden");
    $(".online-shop").removeClass("hidden");
    $(".search-input").addClass("hidden");
  });
});
