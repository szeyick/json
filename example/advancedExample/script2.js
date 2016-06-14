// Retrieve the DOM element that corresponds to the id="output"
var output = document.getElementById('output');

// Built in method allows to set up an ajax request.
var ajaxhttp = new XMLHttpRequest(); 
var url = "https://api.myjson.com/bins/quqe";

// Initialises the Ajax request
ajaxhttp.open("GET", url, true);
ajaxhttp.setRequestHeader("content-type", "application/json"); // Value to send to the server.
ajaxhttp.onreadystatechange = function() {
	// If a successful request has been made.
	var done = 4, ok = 200;
	if (ajaxhttp.readyState === done && ajaxhttp.status === ok) {
		// Parse the response from the file.
		var jcontent = JSON.parse(ajaxhttp.responseText);

		// The returned json object can be accessed the same as if it were on our local side.
		output.innerHTML = jcontent.firstName + ' ' + jcontent.lastName + ' ' + jcontent.age;
		console.log(jcontent);
	}
}
ajaxhttp.send(null); // Perform the send request with null since we are not sending data.

// Access the JSON data structure by calling jcontent.<key>
output.innerHTML = "nothing";

// Create another Ajax request to retrieve some more data.
var entireOuput = document.getElementById('entireOuput');
var ajaxhttp2 = new XMLHttpRequest();

url = "https://api.myjson.com/bins/4k106";
ajaxhttp2.open("GET", url, true);
ajaxhttp2.setRequestHeader("content-type", "application/json"); // Value to send to the server.
ajaxhttp2.onreadystatechange = function() {
	// If a successful request has been made.
	var done = 4, ok = 200;
	if (ajaxhttp2.readyState === done && ajaxhttp2.status === ok) {
		// Parse the response from the file.
		var jcontent = JSON.parse(ajaxhttp2.responseText);

		// The returned json object can be accessed the same as if it were on our local side.
		entireOuput.innerHTML += '<br/>';
		// Loop through the JSON message to output the result
		for (var myObj in jcontent) {
			entireOuput.innerHTML += jcontent[myObj].firstName + '<br/>';
		}
		console.log(jcontent);
	}
}
ajaxhttp2.send(null); // Perform the send request with null since we are not sending data.

