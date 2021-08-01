import Comment from '../../molecules/comment/index'
import Bubble from '../../atoms/bubble/index'
import VerticalLine from '../../atoms/vertical_line/index'
import { CommentedBubbleStyle } from './style.module.css'

/**
 * Commented bubble is a mix of the three basic components: 
 * bubble, vertical line, and comment
 * @param {Object} props 
 * @param {Function(key: int)} props.addBubble - will be called whenever the user 
 * press the return key
 * @param {Function(key: int)} props.removeBubble - will be called whenever the user
 * press backspace with the empty input field to a bubble the moment it is created
 * @param {Boolean} props.isEven - translates the comment to above or below the bubble
 * @returns 
 */
export default function CommentedBubble(props)
{
	return (
		<div className={CommentedBubbleStyle}>
			<Bubble addBubble={props.addBubble}
					removeBubble={props.removeBubble}
					identifier={props.identifier}>
			</Bubble>
			<VerticalLine isEven={props.isEven}></VerticalLine>
			<Comment isEven={props.isEven}></Comment>
		</div>
	)
}