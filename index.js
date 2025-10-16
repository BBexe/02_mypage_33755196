var http = require("http");
const port = 8000;

http.createServer(function (req, res) {
  // Task 20: log the request
console.log(req); // full object log
  console.log(' Quick Info ');    
  console.log('Method:', req.method);   
  console.log('URL:', req.url);
  console.log('Headers:', req.headers);
  console.log('Remote Address:', req.socket.remoteAddress);

  // Basic environment info from headers    
  const ua = (req.headers['user-agent'] || '').toLowerCase();
  const lang = (req.headers['accept-language'] || '').split(',')[0].trim().toLowerCase() || 'en';
  const isMobile = /\b(android|iphone|ipad|ipod|mobile)\b/.test(ua);

  // Determine greeting based on language 
  let greeting = 'Hello';
  if (lang.startsWith('es')) greeting = 'Hola';
  else if (lang.startsWith('fr')) greeting = 'Bonjour';
  else if (lang.startsWith('it')) greeting = 'Ciao';

  //  Routing logic based on URL
  let content = '';
  if (req.url === '/' || req.url.startsWith('/?')) {
    content = `
      <!doctype html>
      <html lang="${lang}">
      <head>
        <meta charset="utf-8">
        <title>My Node Page</title>
        <style>
          body { font-family: Arial, sans-serif; margin: 2rem; line-height: 1.5; }
          h1, h2 { color: #333; }
          .info { margin-top: 1rem; padding: .5rem 1rem; border: 1px solid #ccc; border-radius: .5rem; }
        </style>
      </head>
      <body>
        <h1>${greeting}, welcome to my page!</h1>
        <h2>${isMobile ? 'Mobile User Detected' : 'Desktop User Detected'}</h2>
        <p>I’m <strong>Alberto</strong>. This simple Node.js app serves an HTML page using the built-in <code>http</code> module.</p>
        <div class="info">
          <p>Your browser language: <code>${lang}</code></p>
          <p>Your user-agent: <code>${req.headers['user-agent']}</code></p>
          <p>Try going to <a href="/about">/about</a> to see another route.</p>
        </div>
      </body>
      </html>
    `;
  } else if (req.url === '/about') {
    content = `
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>About Me</title>
      </head>
      <body>
        <h1>About Me</h1>
        <h2>A few facts</h2>
        <p>I enjoy coding, learning JavaScript, and experimenting with Node.js.</p>
        <p><a href="/">Return Home</a></p>
      </body>
      </html>
    `;
  } else {
    content = `
      <!doctype html>
      <html lang="en">
      <head><meta charset="utf-8"><title>404 Not Found</title></head>
      <body>
        <h1>404 - Page Not Found</h1>
        <p>No page at <code>${req.url}</code>. Try <a href="/">Home</a>.</p>
      </body>
      </html>
    `;
  }

  //  Send response 
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(content);

}).listen(port, function () {
  console.log(`Node server is running on port ${port}...`);
});
