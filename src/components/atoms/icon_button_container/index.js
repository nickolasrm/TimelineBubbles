import { IconButtonContainerStyle } from './style.module.css'
import { cloneElement, Children } from 'react'

/**
 * Adds a outer div with padding for buttons to have a large click area
 * also changes the pointer
 * @param {Object} props 
 * @param {String} props.color - color will be set to all icons
 * @param {String} props.childClasses - classes will be added to icons
 * @param {Int} props.padding - padding for each button
 * @returns {IconContainer}
 */
export default function IconContainer(props) {
	return (<>
		{Children.map(props.children, (child) => {
			return (<div className={"p-" + (props.padding || 2) + " " +
							IconButtonContainerStyle}>
				{cloneElement(child, {
						color: props.color || child.color || "white",
						className: (child.className || "") + " " + (props.childClasses || "")
					}
				)}
			</div>)
		})}
		</>)
}