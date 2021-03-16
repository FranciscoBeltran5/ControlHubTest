# Fibonacci's series

## Specific number in the Fibonacci's series

<p>This is simple REST API that given an <em>n</em> integer bigger then zero, will respond with a number in the Fibonacci's series in <em>n</em>'s place. </p>

## Installation
<p>To install this app please clone this repository and, after navigating to the containing folder, execute: <code>npm i</code></p>

## Running
<p>To get this app running just execute <code>node index.js</code> in the terminal program of your OS.</p>

## Testing
<p>In order to test the Express app running you can run the next command in most UNIX based OS: <code>curl -X POST -H "Content-Type: application/json" -d '{"numero": "3"}'  http://localhost:3000/fibonacci</code></p>

## Future improvement
<p>Currently this API hasn't been tested against several limit test cases. Here's a list of future improvements that can be made:
<ol>
<li>Ensuring only integer type numbers are used</li>
<li>Display a warning when using non positive numbers</li>
<li>Making sure the API operates when data is passed in the request body</li>
<li>Accepting several data types on the request body</li>
</ol>
</p>
