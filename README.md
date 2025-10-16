# Simple Node.js Web Server


This project is a basic web server created using only the built-in `http` module in Node.js. It demonstrates fundamental concepts like handling HTTP requests, basic routing, and serving dynamic HTML content based on the user's environment without any external dependencies.

---

## Features

* **No Dependencies:** Built entirely with native Node.js modules.
* **Basic Routing:** Serves different content for the `/` (home) and `/about` routes.
* **404 Handling:** Displays a "Not Found" page for any unrecognized URL.
* **Environment Detection:**
    * Identifies if the user is on a mobile or desktop device.
    * Detects the user's preferred browser language.
* **Request Logging:** Prints detailed request information to the console for debugging.

---

## Getting Started

### Prerequisites

You must have **Node.js** installed on your computer.

### Installation and Running

1.  Save the code as a file named `index.js`.
2.  Open your terminal in the same directory as the file.
3.  Run the server with the following command:
    ```bash
    node index.js
    ```
4.  You should see the confirmation message in your terminal:
    ```
    Node server is running on port 8000...
    ```
5.  Open your web browser and navigate to `http://localhost:8000`.

---

## How It Works

The server logic is contained entirely within the `index.js` file. The script uses `http.createServer()` to create a new HTTP server. This function takes a callback that executes every time a request (`req`) is received.

An `if...else` block checks the `req.url` property to decide which content to serve.

* If `req.url` is `/`, it serves the home page.
* If `req.url` is `/about`, it serves the "About Me" page.
* Any other URL results in a **404 Not Found** page.

Finally, `res.writeHead()` sets the HTTP headers, and `res.end()` sends the generated HTML string to the browser.