import { ContainerStyle } from './style.module.css'

/**
 * Stores all bubbles inside of it and aligns them
 * @param {Object} props 
 * @param {Object} props.children
 * @returns 
 */
export default function BubblesContainer(props)
{
	return (
		<div className={"d-flex w-100 h-100 align-items-center\
			justify-content-center flex-row " + ContainerStyle}>
			{props.children}
		</div>
	)
}