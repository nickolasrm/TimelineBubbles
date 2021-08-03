import { TitleStyle, TimelineStyle, BubblesStyle, AnimatedStyle } from './style.module.css'

/**
 * A text used as a title for the application
 * @param {Object} props 
 * @param {Boolean} props.isAnimated - animates title when it is mounted
 * @returns 
 */
export default function Title(props)
{
	return (<div><div className={"print " + TitleStyle + " " + (props.className || "") +
					(props.isAnimated ? AnimatedStyle : "")}>
		<h1 className={TimelineStyle} >Timeline</h1>
		<span className={BubblesStyle}>Bubbles</span>
	</div></div>)
}