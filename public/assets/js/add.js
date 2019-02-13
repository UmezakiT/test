$(document).ready(function() {

  $("#submit").on("click", function(e) {
    e.preventDefault();

    // package up data from form
    const reservationData = {
      name: $("#name-input").val().trim(),
      email: $("#email-input").val().trim(),
      phone: $("#phone-input").val().trim()
    };

    $.ajax({
      url: "/api/tables",
      method: "POST",
      data: reservationData // this is req.body
    }).then(function(dbResponse) {

      // check to see if dbResponse.isWaiting is true or false
      console.log(dbResponse);

      if (dbResponse.isWaiting === true) {
        alert("You're on the waiting list");
      }
      else {
        alert("You're not on the waiting list");
      }

    })
  })


})