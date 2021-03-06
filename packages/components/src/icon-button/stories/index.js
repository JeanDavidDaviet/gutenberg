/**
 * External dependencies
 */
import { number, text } from '@storybook/addon-knobs';

/**
 * Internal dependencies
 */
import IconButton from '../';

export default { title: 'Components|IconButton', component: IconButton };

export const _default = () => {
	const icon = text( 'Icon', 'ellipsis' );
	const label = text( 'Label', 'More' );
	const size = number( 'Size' );

	return (
		<IconButton
			icon={ icon }
			label={ label }
			size={ size }
		/>
	);
};

export const grouped = () => {
	const GroupContainer = ( { children } ) => (
		<div style={ { display: 'inline-flex' } }>{ children }</div>
	);

	return (
		<GroupContainer>
			<IconButton icon="editor-bold" label="Bold" />
			<IconButton icon="editor-italic" label="Italic" />
			<IconButton icon="editor-underline" label="Underline" />
		</GroupContainer>
	);
};
