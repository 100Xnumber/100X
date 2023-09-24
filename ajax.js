const xhttp = new XMLHttpRequest();
xhttp.onload = function() {
    document.getElementById('header').innerHTML =
    this.getResponseHeader("Last-Modified");
}
xhttp.open("GET", "Support.html");
xhttp.send();


let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  
  $.ajax({
    url: 'http://timeapi.org/utc/now.json',
    dataType: 'jsonp'
})
.done(function(response) {
    // response = {"dateString":"2012-03-06T02:18:25+00:00"}
    console.log(response.dateString);// "2012-03-06T02:18:25+00:00"
});