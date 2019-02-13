$(document).ready(function() {


  // get all tables on waiting list
  $.ajax({
    url: "/api/tables/true",
    method: "GET"
  })
  .then(function(tableData) {

    tableData.forEach((table, i) => {

      // create list group item and add info to it
      const $li = $("<li class='list-group-item'>");

      $li
        .append(`<h4>Table ${i + 1}: ${table.name}</h4>`)
        .append(`<p>Phone: ${table.phone}</p>`)
        .append(`<p>Email: ${table.email}</p>`);

      $("#waiting").append($li);


    });

  });



  // get all tables not on waiting list
  // get all tables on waiting list
  $.ajax({
    url: "/api/tables/false",
    method: "GET"
  })
    .then(function (tableData) {

      tableData.forEach((table, i) => {

        // create list group item and add info to it
        const $li = $("<li class='list-group-item'>");

        $li
          .append(`<h4>Table ${i + 1}: ${table.name}</h4>`)
          .append(`<p>Phone: ${table.phone}</p>`)
          .append(`<p>Email: ${table.email}</p>`);

        $("#not-waiting").append($li);


      });

    });


})