import { ContainerStyle } from './style.module.css'

/**
 * Contains buttons for toolbar with desired padding and invisible style
 * @param {Object} param
 * @param {Object} param.children
 * @param {Function(ev)} param.onClick
 */
export default function ButtonContainer(props)
{
	return <div 
		className={ContainerStyle} 
		onClick={props.onClick}
		data-testid={props.testid}>
		{props.children}
	</div>
}