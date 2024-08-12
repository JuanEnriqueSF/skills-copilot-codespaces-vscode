// Create web server
var http = require('http');
// Create a new member object
var member = new Member('Jane', 'Doe');
// Add skills to the member object
member.skills = ['JavaScript', 'React', 'Node.js'];
// Display the skills
console.log(member.skills);