$(document).ready(function() {
  $("#main-link").click(function(event) {
    event.preventDefault();
    $("#projects").hide();
    $("#main").show();
  });

  $("#projects-link").click(function(event) {
    event.preventDefault();
    $("#main").hide();
    $("#projects").show();
  });
});
