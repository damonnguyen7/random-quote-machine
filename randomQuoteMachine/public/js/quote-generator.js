$(document).ready(function() {
  //Add a click event to new quote button to generate new quote
  $('.newQuote-button').on('click', function() {
    generateQuote();
  });

  //function that talks to mashape to get quote.
  function generateQuote() {
    $.ajax({
      url: "https://andruxnet-random-famous-quotes.p.mashape.com/endpoint?mashape-key=oSMg6LP2zkmsho6ac0zgJWJQHfTSp1MLK02jsnjKKibjs40P1n",
      type: "POST",
      dataType: "json"
    }).done(function(quote) {
      var quoteObj = JSON.parse(JSON.stringify(quote)),
          quote = quoteObj.quote,
          author = quoteObj.author;

      $('.quote').fadeOut(function() {
        $(this).text(quote).fadeIn();
      });

      $('.author').fadeOut(function() {
        $(this).text('- '+ author).fadeIn();
      });
    });
  };

});