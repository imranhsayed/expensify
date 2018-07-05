const User = ( props ) => {
	return (
		<div>
			<p>Name: { props.name }</p>
			<p>Age: { props.age }</p>
		</div>
	);
};

const appEl = document.getElementById( 'appId' );
ReactDOM.render( <User name="Amy" age={ 26 }/>, appEl );