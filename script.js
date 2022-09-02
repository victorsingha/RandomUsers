getImage();

generateMap(10.305385,77.923029)


$(document).ready(function () {
  $("button").click(function () {
    getImage()
  });
});


function getImage() {
  showLoading();
  $.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
      $("#ProfileImage").attr('src', data.results[0].picture.large);
      $('#JSONString').text(`${JSON.stringify(data, undefined, 2)}`);
      hideLoading();
    }
  });
}

function generateMap(latitude,longitude) {
   $("#gooo").html(`<iframe id="googleMap" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src = "https://maps.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&amp;output=embed"></iframe>`);
}

function showLoading() {
  $("#PreLoaderBar").css("display", "block");
}

function hideLoading() {
  $("#PreLoaderBar").css("display", "none");
}

