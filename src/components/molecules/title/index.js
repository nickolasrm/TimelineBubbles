import { TitleStyle, TimelineStyle, BubblesStyle } from './style.module.css'

/**
 * A text used as a title for the application
 * @param {Object} props 
 * @returns 
 */
export default function Title(props)
{
	return (<div><div className={TitleStyle + " " + (props.className || "")}>
		<h1 className={TimelineStyle} >Timeline</h1>
		<span className={BubblesStyle}>Bubbles</span>
	</div></div>)
}