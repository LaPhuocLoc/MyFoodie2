var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) {
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var getUrl = button.getAttribute('data-bs-whatever')
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  $("#addVideo").attr('src', getUrl);
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#exampleModal").on('hide.bs.modal', function(){
        $("#addVideo").attr('src', '');
    });
})