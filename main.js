$("a.nav-link").on("click", function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top,
      },
      800
    );
  }
});

$("#contactForm").on("submit", function (event) {
  event.preventDefault();
  alert("Thank you for your message!");
  $(this).trigger("reset");
});

$(document).ready(function () {
  $("#name").click(function () {
    $("span").remove(".span-name");
  });
});

$(document).ready(function () {
  $("#email").click(function () {
    $("span").remove(".span-email");
  });
});

$(document).ready(function () {
  $("#message").click(function () {
    $("span").remove(".span-message");
  });
});
