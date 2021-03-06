# Fibonacci's series

## Specific number in the Fibonacci's series

<p>This is a simple REST API that given an <em>n</em> integer bigger then zero, will respond with a number in the Fibonacci's series in <em>n</em>'s place. For example, if you want the third number in said series, passing 3 as a parameter to this API should return 1. In the same manner, if you want to know what number occupies the ninth position, passing the number 9 as a parameter should return 21.</p>

## Installation
To install this app please clone this repository and, after navigating to the containing folder, execute: <code>npm install</code>, this assuming you have npm already installed. If you don't have npm in your system please refer to this [link](https://www.npmjs.com/get-npm)

## Running
To get this app running just execute <code>node index.js</code> in the terminal program of your OS, this assuming you have node already installed. If you don't have node in your system please refer to this [link](https://nodejs.org/es/)


## Testing
In order to quickly test the app you can use this command in most UNIX based OS:
<code>curl -X POST -H "Content-Type: application/json" -d '{"numero": "3"}'  http://localhost:3000/fibonacci</code>
Where <em>numero</em> represents the place in the Fibonacci's series where you want to get the value from. If you can't render or analize the response data you can see the result number in the console, a message similar to **Resultado: 1** should appear after the POST request is processed.

## Future improvement
<p>Currently this API hasn't been tested against several limit test cases. Here's a list of future improvements that can be made:
<ol>
<li>Ensuring only integer type numbers are used</li>
<li>Display a warning when using non positive numbers</li>
<li>Making sure the API operates when data is passed in the request body</li>
<li>Accepting several data types on the request body</li>
</ol>
</p>
