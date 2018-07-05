/**
 * Counter Example
 *
 * @type {number}
 */
let count = 0;
const addOne = () => {
	count++;
	// Each time addOne function is called renderCounterApp() creates a new template with current count values and adds to the dom
	renderCounterApp();
};
const minusOne = () => {
	count--;
	renderCounterApp();
};
const reset = () => {
	count = 0;
	renderCounterApp();
};

let divEl = document.getElementById( 'appId' );

const renderCounterApp = () => {
	const templateTwo = (
		<div>
			<h1>Count: {count}</h1>
			<button onClick={ addOne }>+1</button>
			<button onClick={ minusOne }>-1</button>
			<button onClick={ reset }>Reset</button>
		</div>
	);
	ReactDOM.render( templateTwo, divEl );
};
// Called this so that our template gets rendered when the page is loaded
renderCounterApp();

