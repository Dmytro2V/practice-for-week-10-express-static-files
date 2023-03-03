const express = require('express');
const app = express();

// Your code here
// part 1 - Part 1: File paths appended to root URL
// option 1: 
// app.use(express.static('assets'));

// option 2:
const path = require('path'); 
app.use(express.static(path.join(__dirname, 'assets')));

//part 2 - File paths appended to root URL II
// app.use('/scripts', express.static('assets/scripts'));

// Part 3: File paths appended to a resource
//app.use('/stylesheets', express.static('assets/css'));


// Bonus Practice - Serving Static Files in Express
// Serve the files in the assets/images folder under a route resource called stickers
app.use('/stickers', express.static('assets/images'))
// url is http://localhost:5000/stickers/hello.png

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));