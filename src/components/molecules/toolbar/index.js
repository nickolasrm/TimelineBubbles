import React from 'react'
import { ToolbarStyle, ToolbarContainerStyle } from './style.module.css'
import { Plus, Folder2, Save, FileImage } from 'react-bootstrap-icons'
import IconContainer from '../../atoms/icon_button_container'

/**
 * Contains the new, open and save buttons and triggers for making a
 * rounded toolbar
 * @param {Object} props 
 * @param {String} props.className 
 * @param {Object} props.theme - Contains variables relative to the theme. e.g. colors
 * @param {Function(Object)} props.setTheme - Sets the theme state object
 * @param {Array} props.bubbles - Contains data relative to bubbles
 * @param {Function(Array)} props.setBubbles - Sets the bubbles array
 * @returns {Toolbar}
 */
export default function Toolbar(props)
{
	return (
		<div className={ToolbarContainerStyle}>
			<div className={ToolbarStyle + 
					" rounded-pill py-2 ps-2 pe-4 d-flex align-items-center justify-content-center " +
					(props.className || "")}>
				<IconContainer childClasses="mx-2" color="white" padding="2">
					<Plus size="1.8rem"></Plus>
					<Folder2 size="1.6rem"></Folder2>
					<Save size="1.35rem"></Save>
					<FileImage size="1.4rem"></FileImage>
				</IconContainer>
			</div>
		</div>)
}