import { VerticalLineStyle, EvenLineStyle, OddLineStyle } from './style.module.css'

/**
 * Adds a vertical line for being used between a bubble and a comment
 * @param {Object} props
 * @param {Boolean} props.isEven - used for positioning a vertical line
 * @returns 
 */
export default function VerticalLine(props)
{
	return (
		<div className={VerticalLineStyle + " disable-anim " +
			(props.isEven ? EvenLineStyle : OddLineStyle)}>
		</div>
	)
}