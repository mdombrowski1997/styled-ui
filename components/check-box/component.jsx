import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { CheckboxContent } from './checkbox-content';
import * as Styled from './styled';

/** Styled checkbox control with consistent styling across platforms */
export class Checkbox extends Component {
	static propTypes = {
		/** Handler passed to native `button` */
		onClick: PropTypes.func.isRequired,
		onMouseUp: PropTypes.func,
		title: PropTypes.string,
		isChecked: PropTypes.bool,
		theme: PropTypes.shape({
			primary: PropTypes.string,
			border: PropTypes.string,
			disabledBackground: PropTypes.string,
			disabledBorder: PropTypes.string,
		}),
		type: PropTypes.string,
		children: PropTypes.node,
		/** See the docs for how to override styles properly  */
		className: PropTypes.string,
		/** Disables automatic blur */
		disableAutoBlur: PropTypes.bool,
		disabled: PropTypes.bool,
	};

	/* eslint-disable react/prop-types */
	onMouseUp = e => {
		if (this.props.onMouseUp) {
			this.props.onMouseUp(e);
		}

		if (!this.props.disableAutoBlur && this.componentRef.current) {
			this.componentRef.current.blur();
		}
	};

	componentRef = React.createRef();

	render() {
		const { onClick, title, isChecked, theme, type, children, className, disabled } = this.props;
		return (
			<ThemeProvider theme={theme}>
				<Styled.CheckboxContainer
					ref={this.componentRef}
					onClick={onClick}
					onMouseUp={this.onMouseUp}
					type={type}
					className={className}
					role={'checkbox'}
					aria-checked={isChecked}
					disabled={disabled}
				>
					<CheckboxContent isChecked={isChecked} title={title} disabled={disabled}>
						{children}
					</CheckboxContent>
				</Styled.CheckboxContainer>
			</ThemeProvider>
		);
	}
}

Checkbox.defaultProps = {
	theme: {
		primary: '#1E91D6',
		border: '#95908f',
		disabledBackground: '#ebebeb',
		disabledBorder: '#c7c7c7',
	},
	type: 'button',
};
