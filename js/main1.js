
  //pc端图片动画
  $("#imgBox1").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox1").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox2").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox2").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox3").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox3").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox4").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox4").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox5").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox5").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox6").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox6").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  $("#imgBox7").on("mouseover", function () {
    $(this).children().addClass("active");
  });
  $("#imgBox7").on("mouseout", function () {
    $(this).children().removeClass("active");
  });

  var swipersmall = new Swiper(".main1-image", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });