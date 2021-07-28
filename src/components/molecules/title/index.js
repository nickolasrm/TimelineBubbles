import { TitleStyle, TimelineStyle, BubblesStyle } from './style.module.css'

/**
 * A text used as a title for the application
 * @param {Object} props 
 * @returns 
 */
export default function Title(props)
{
	return (<div><div className={TitleStyle + " d-flex align-items-end " + (props.className || "")} 
				style={{color: (props.color || "white")}}>
		<h1 className={"m-0 me-1 " + TimelineStyle} >Timeline</h1>
		<span className={BubblesStyle}>Bubbles</span>
	</div></div>)
}