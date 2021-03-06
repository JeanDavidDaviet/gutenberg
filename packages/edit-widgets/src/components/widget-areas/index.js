/**
 * WordPress dependencies
 */
import { useMemo } from '@wordpress/element';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

/**
 * Internal dependencies
 */
import WidgetArea from '../widget-area';

const EMPTY_ARRAY = [];

function WidgetAreas( { areas, blockEditorSettings, selectedArea, setSelectedArea } ) {
	const onBlockSelectedInArea = useMemo(
		() => areas.map( ( value, index ) => ( () => {
			setSelectedArea( index );
		} ) ),
		[ areas, setSelectedArea ]
	);

	return areas.map( ( { id }, index ) => (
		<WidgetArea
			isSelectedArea={ index === selectedArea }
			onBlockSelected={ onBlockSelectedInArea[ index ] }
			blockEditorSettings={ blockEditorSettings }
			key={ id }
			id={ id }
			initialOpen={ index === 0 }
		/>
	) );
}

export default compose( [
	withSelect( ( select ) => {
		const { getEntityRecords } = select( 'core' );
		const areas = getEntityRecords( 'root', 'widgetArea' ) || EMPTY_ARRAY;
		return {
			areas,
		};
	} ),
] )( WidgetAreas );
