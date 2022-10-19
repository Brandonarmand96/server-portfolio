const http = require("http");
const fs = require('fs');


// Create a server object
http.createServer(function (req, res) {

  //function to read file and render it
  const render = (page) => {
    const file = './'+page+'.html'
    fs.readFile(file, null, (error, data) => {
      if(error) {
        res.writeHead(404);
        res.write("whoops page not found")
      } else {
        res.write(data)
      }
      res.end()
    })
  }

	// http header
	res.writeHead(200, {'Content-Type': 'text/html'});

	var url = req.url;

	if(url ==='/about') {
		render('about');
	}
	else if(url ==='/contact') {
		render('contact')
	}
	else {
		render('index')
	}
}).listen(3000, function() {

	// The server object listens on port 3000
	console.log("server start at port 3000");
});
