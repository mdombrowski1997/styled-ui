import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../button';
import { colors } from '../shared-styles';
import { ModalFooter } from './modal-footer';
import * as Styled from './styled';

export const DefaultModalFooter = props => (
	<ModalFooter>
		<Styled.FooterContainer>
			{props.commitButton && (
				<Button
					primary
					medium
					theme={{ width: props.useFullWidthButtons ? '100%' : null }}
					tabIndex={props.commitButton.tabindex}
					onClick={props.commitButton.onClick}
				>
					{props.commitButton.text}
				</Button>
			)}
			{props.cancelButton && (
				<Styled.CancelContainer>
					<Button
						primaryOutline
						medium
						theme={{ width: props.useFullWidthButtons ? '100%' : null }}
						tabIndex={props.cancelButton.tabindex}
						onClick={props.cancelButton.onClick}
					>
						{props.cancelButton.text}
					</Button>
				</Styled.CancelContainer>
			)}
			{props.deleteButton && (
				<Styled.DeleteContainer>
					<Button
						primaryOutline
						medium
						theme={{
							defaultColor: colors.redBase,
							hoverColor: colors.redLight,
							activeColor: colors.redDark,
							disabledColor: colors.redTint,
							width: props.useFullWidthButtons ? '100%' : null,
						}}
						onClick={props.deleteButton.onClick}
					>
						{props.deleteButton.text}
					</Button>
				</Styled.DeleteContainer>
			)}
		</Styled.FooterContainer>
	</ModalFooter>
);

DefaultModalFooter.propTypes = {
	commitButton: PropTypes.shape({
		onClick: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired,
		tabindex: PropTypes.string,
	}),
	cancelButton: PropTypes.shape({
		onClick: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired,
		tabindex: PropTypes.string,
	}),
	deleteButton: PropTypes.shape({
		onClick: PropTypes.func.isRequired,
		text: PropTypes.string.isRequired,
	}),
	useFullWidthButtons: PropTypes.bool,
};
