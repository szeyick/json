// Define the JSON data structure
var jcontent1 = {
	  "firstName": "John",
	  "lastName": "Smith",
	  "isAlive": true,
	  "age": 25,
	  "address": {
	    "streetAddress": "21 2nd Street",
	    "city": "New York",
	    "state": "NY",
	    "postalCode": "10021-3100"
	  },
	  "phoneNumbers": [
	    {
	      "type": "home",
	      "number": "212 555-1234"
	    },
	    {
	      "type": "office",
	      "number": "646 555-4567"
	    },
	    {
	      "type": "mobile",
	      "number": "123 456-7890"
	    }
	  ],
	  "children": [],
	  "spouse": null
}

var jcontent2 = {
	  "firstName": "Bob",
	  "lastName": "Smith",
	  "isAlive": true,
	  "age": 34,
	  "address": {
	    "streetAddress": "21 2nd Street",
	    "city": "New York",
	    "state": "NY",
	    "postalCode": "10021-3100"
	  },
	  "phoneNumbers": [
	    {
	      "type": "home",
	      "number": "212 555-1234"
	    },
	    {
	      "type": "office",
	      "number": "646 555-4567"
	    },
	    {
	      "type": "mobile",
	      "number": "123 456-7890"
	    }
	  ],
	  "children": [],
	  "spouse": null
}

// Nest our JSON objects inside another JSON object.
var users = {
	"user1" : jcontent1,
	"user2" : jcontent2
}

// Print the variable content to the browsers console.
console.log(jcontent1);

// Retrieve the DOM element that corresponds to the id="output"
var output = document.getElementById('output');

jcontent1.address.city = 'Melbourne';

// Access the JSON data structure by calling users.<key>
// The variable users is our outter JSON container.
output.innerHTML = users.user1.firstName + ' ' + users.user1.lastName + ' '
	+ users.user1.phoneNumbers[0].type + ' ' + users.user1.address.city;

