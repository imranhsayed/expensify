const name = 'Imran',
	age = 2,
	objectVar = {
		title: 'Title',
		subtitle: 'Subtitle',
		options: [ 'One', 'Two' ],
		complexion: 'fair',
		weight: 82,
		location: 'Pune'
	},
	appRoot = document.getElementById( 'appId' );
let template = '';


// Only render the subtitle with p tag if the subtitle exists . Use Logical and operator for this
// render a p tag containing text if there are item in option array or not

function getLocation( location ) {
	if ( location ) {
		return <p>Location: { location }</p>
	}
}
template = (
	<div>
		<h1>{name}</h1>
		{ objectVar.subtitle && <p>{objectVar.subtitle}</p> }
		{ objectVar.options.length ? <p>There are items</p> : <p>There are no items</p> }
		{/* Here if the condition before && is true it will return the value of age */}
		<p>{age > 12 && age}</p>
		<p>{age > 12 && <p>Age: {age}</p>}</p>
		{/*  If the age value exists and its greater than 12 then print the age value */}
		<p>{ ( age && age > 12 ) && age }</p>
		<p>{objectVar.complexion}</p>

		{/* We can use ternary( conditional ) operator to display values conditionally*/}
		<p>{ objectVar.weight ? objectVar.weight : 'Not available' }</p>

		{/* This is how you display js*/}
		{<h3>This is heading</h3>}

		{/* Notice that if the value returned
			by the function is undefined, null or boolean it will
			not show up inside the jsx expression  curly braces*/}
		{ getLocation( objectVar.location ) }

		{/* Below ones will not show up as they are undefined, null/boolean */}
		{undefined}
		{null}
		{true}
	</div>
);

ReactDOM.render( template, appRoot );
