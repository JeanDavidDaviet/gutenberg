/**
 * External dependencies
 */
import classnames from 'classnames';
import { isString } from 'lodash';
import useResizeAware from 'react-resize-aware';

/**
 * Internal dependencies
 */
import Dashicon from '../dashicon';

/**
 * Renders a placeholder. Normally used by blocks to render their empty state.
 *
 * @param  {Object} props The component props.
 * @return {Object}       The rendered placeholder.
 */
function Placeholder( { icon, children, label, instructions, className, notices, preview, isColumnLayout, ...additionalProps } ) {
	const [ resizeListener, { width } ] = useResizeAware();
	const classes = classnames( 'components-placeholder', className );
	const fieldsetClasses = classnames( 'components-placeholder__fieldset', { 'is-column-layout': isColumnLayout } );
	return (
		<div { ...additionalProps } className={ classes }>
			{ resizeListener }
			{ notices }
			{ preview &&
				<div className="components-placeholder__preview">
					{ preview }
				</div>
			}
			<div className="components-placeholder__label">
				{ isString( icon ) ? <Dashicon icon={ icon } /> : icon }
				{ label }
			</div>
			{ !! instructions && ( width === null || width >= 320 ) && <div className="components-placeholder__instructions">{ instructions }</div> }
			<div className={ fieldsetClasses }>
				{ children }
			</div>
		</div>
	);
}

export default Placeholder;
