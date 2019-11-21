/**
 * Internal dependencies
 */
import InnerBlocks from './index';

/**
 * Creates a ButtonBlockAppender which keeps focus on the previously focused element.
 * This component exists because while ideally it would be enough to capture the
 * bubbling focus event from the Inserter, due to the
 * characteristics of click focusing of `button`s in
 * Firefox and Safari, it is not reliable.
 * See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#Clicking_and_focus
 */
function UnfocusableButtonBlockAppender() {
	return (
		<div tabIndex={ -1 } onFocus={ ( event ) => event.stopPropagation() }>
			<InnerBlocks.ButtonBlockAppender />
		</div>
	);
}

export default UnfocusableButtonBlockAppender;
