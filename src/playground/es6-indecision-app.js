const appRootDivEl = document.getElementById( 'appId' );
const dataObj = {
	optionsArray: [],
};

/**
 * Prevent the default nature of the form,
 * Add the values entered by the user into optionsArray of dataObj,
 * Set the form input value to empty
 * Call the renderPageConst() to render the JSX template with the new values.
 *
 * @param {object} event Event.
 */
const onFormSubmit = ( event ) => {
	event.preventDefault();
	const formElements  = event.target.elements;
	const optionValue = formElements.option.value;

	// If user has put any value inside of the input tag, push that value of optionsArray.
	if ( optionValue ) {
		dataObj.optionsArray.push( optionValue );

		// Set the form input values to empty.
		formElements.option.value = '';
		console.log( dataObj );
	}

	// Call this function to render the JSX template with the updated values
	renderPageConst();
};

/**
 * An event that sets the optionArray count to 0.
 *
 * @param {object} event Event.
 */
const removeAllOptionsData = ( event ) => {
	event.preventDefault();
	dataObj.optionsArray = [];
	renderPageConst();
};

const onMakeDecision = () => {
	/**
	 * Math.random() will generate a random number between 0 and 1 , will will multiply this number
	 * with the count of items in the optionsArray and then we are using the
	 * Math.floor function to round that number.
	 *
	 * @type {number}
	 */
	const randomNum = Math.floor( Math.random() * dataObj.optionsArray.length );

	// This will get the item from optionsArray at the random key no.
	const item = dataObj.optionsArray[ randomNum ];
	if ( dataObj.optionsArray.length ) {
		alert( item );
	}
};

/**
 * Render page content
 */
const renderPageConst = () => {
	const template = (
		<div>
			<button disabled={ dataObj.optionsArray.length === 0 } onClick={ onMakeDecision }>What should I Do?</button>
			<button onClick={ removeAllOptionsData }>Remove All</button>
			<h2>Added data</h2>
			<p>Options Added Count: {dataObj.optionsArray.length}</p>
			<ul>
				{
					dataObj.optionsArray.map( ( item ) => <p key={item}>{item}</p> )
				}

			</ul>
			<br/>
			<form onSubmit={ onFormSubmit } method="POST">
				<input type="text" name="option"/>
				<button>Add Option</button>
			</form>
		</div>
	);
	ReactDOM.render( template, appRootDivEl );
};

// Calling this function to render the JSX template for the first time the page loads.
renderPageConst();