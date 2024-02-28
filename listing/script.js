<script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>

$(document).ready(function () {
  // Set the number of items per page
    var itemsPerPage = 12;

    // Hide all cards initially
    $('.listing-card-single').hide();

    // Show the first set of cards based on the itemsPerPage value
    $('.listing-card-single:lt(' + itemsPerPage + ')').show();

    // Calculate the total number of pages
    var totalPages = Math.ceil($('.listing-card-single').length / itemsPerPage);

    // Create pagination buttons
    for (var i = 1; i <= totalPages; i++) {
      $('.pagination').append('<button class="page-btn">' + i + '</button>');
    }

    // Add click event to pagination buttons
    $('.page-btn').click(function () {
      var pageNumber = $(this).text();

      // Hide all cards
      $('.listing-card-single').hide();

      // Show the cards for the selected page
      var startIndex = (pageNumber - 1) * itemsPerPage;
      var endIndex = startIndex + itemsPerPage;
      $('.listing-card-single').slice(startIndex, endIndex).show();
    });
  });
