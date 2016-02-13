


$(document).ready(function() {
  $("#name-submit").submit(function(event) {
    event.preventDefault();
    $('#name-block').prop('title', 'your new title');
    // document.getElementById('name-block').style = "display: none;";
    // document.getElementById('name-size').style = "display: block;";
  });

  $("form#play-again").submit(function(event) {
    location.reload(forceGet);
  });
});
