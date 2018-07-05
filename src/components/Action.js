import React from 'react';

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Action = ( props ) => (
	<div>
		{/* The disabled value will be flipped to true to false and vice versa,
				 depending on the boolean value of this.props.hasOptions */}
		<button className="big-button" disabled={ ! props.hasOptions } onClick={ props.handlePick }>
			What should I do?
		</button>
	</div>
);

export default Action;