import React from 'react';

/**
 * Functional Based component.
 *
 * @param props
 * @return {*}
 * @constructor
 */
const Option = ( props ) => (
	<div className="option">
		{/* The optionText key value set inside the Options functional based component, is now available here.
		 props.count will contain the item no. */}
		{ <p className="widget__message option__text">{ props.count }. { props.optionText }</p> }
		{<button className="button button--link"
			onClick={ ( event ) => {
				props.handleDeleteOption( props.optionText )
			}}
		>Remove</button>
		}
	</div>
);
export default Option;