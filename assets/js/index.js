$(function () {
    $("#button-addon2").click(function () {
      let value = $("#search-text").val()

      window.location.href = 'search.html?name=' + value;
    })
    $('#icon').click(function () {
      window.location.href = 'index.html'
    })
  })