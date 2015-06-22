AutoForm.hooks({
    sendItemEmailForm: {
      onSuccess: function(formType, result) {
        $("#sendItemEmailModal").modal('hide')
        swal("Thanks! your item has been successfuly sent");
      }
    }
})