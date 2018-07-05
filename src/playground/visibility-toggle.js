let visibility = false;

const appEl = document.getElementById( 'appId' );
const toggleDescription = () => {

	// This will set the visibility value true if it was false and vice versa.
	visibility = ! visibility;
	renderContent();
};

const renderContent = () => {
	const template = (
		<div>
			<h2>Visibility Toggle</h2>
			<button onClick={toggleDescription}>
				{/* If the visibility is true it will display Hide Details as button text, Show Details otherwise */}
				{ visibility ? 'Hide Details' : 'Show Details' }
			</button>
			{/* If the condition before && operator is true it will render the html content inside JSX (), nothing otherwise */}
			{ visibility && (
				<div>
					<p>This is description</p>
				</div>
			) }
		</div>
	);
	ReactDOM.render( template, appEl );
};
renderContent();