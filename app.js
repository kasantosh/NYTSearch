$(document).ready(function() {
  var searchTerm;
  var retrieve;

  $("#search").on("click", function(e) {
    e.preventDefault();
    var queryUrl =
      "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" +
      searchTerm +
      "&api-key=ACd4bRkDMq5GIjGoCxZpHjihygGZYp2g";
    searchTerm = $("#searchTerm").val();
    retrieve = $("#recordstoRetrieve").val();
    console.log(retrieve);

    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      console.log(response.response.docs);
      //   for (var i = 0; i < retrieve; i++) {
      //     $("#populate").text(response.response.docs[i]);

      //   }
    });
  });
});
