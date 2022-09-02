var profileImage;
var dataObj;
getImage();


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
}

function hideLoading() {
  $("#PreLoaderBar").css("display", "none");
}

