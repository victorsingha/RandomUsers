var profileImage;
var dataObj;
getImage();


$(document).ready(function () {
  $("input").keydown(function () {
    $("input").css("background-color", "yellow");
    $("input").css("border", "solid 25px green");
  });
  $("input").keyup(function () {
    $("input").css("background-color", "pink");
    $("input").css("border", "solid 25px blue");
  });
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
      profileImage = data.results[0].picture.large;
      $("#ProfileImage").attr('src', profileImage);
      dataObj = JSON.stringify(data, undefined, 2)
      $('#JSONString').text(`${dataObj}`);
      hideLoading();
    }
  });
}

function showLoading() {
  $("#PreLoaderBar").css("display", "block");
  $("#loading").css("display", "block");
}

function hideLoading() {
  $("#PreLoaderBar").css("display", "none");
  $("#loading").css("display", "none");
}

