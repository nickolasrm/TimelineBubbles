import { ContainerStyle } from './style.module.css'
import { Link } from 'react-router-dom'

/**
 * Creates a container for a corner cropped top left positioned button container
 * @param {Object} props 
 * @param {String} props.href
 * @param {Object} props.children
 * @returns 
 */
export default function CornerButtonContainer(props)
{
	return <Link to={props.href} 
				data-testid={props.testid}
				className={"print " + ContainerStyle}>
		{props.children}	
	</Link>
}