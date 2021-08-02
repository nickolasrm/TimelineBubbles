import Comment from '../../molecules/comment'
import Bubble from '../../molecules/bubble'
import VerticalLine from '../../atoms/vertical_line'
import { CommentedBubbleStyle } from './style.module.css'

/**
 * Commented bubble is a mix of the three basic components: 
 * bubble, vertical line, and comment
 * @param {Object} props 
 * @param {Object} props.data - contains all data relative to a bubble
 * @param {Function(identifier: int)} props.addBubble - will be called whenever the user 
 * press the return identifier
 * @param {Function(identifier: int)} props.removeBubble - will be called whenever the user
 * press backspace with the empty input field to a bubble the moment it is created
 * @param {Function(identifier: int, data: Object)} props.updateBubble - will be called
 * whenever the user updates the content of a comment of a bubble
 * @param {Boolean} props.isEven - translates the comment to above or below the bubble
 * @returns 
 */
export default function CommentedBubble(props)
{
	/** Dismantle data for sending it to the components */
	const { identifier, title, isImage, comment } = props.data

	return (
		<div className={CommentedBubbleStyle}>
			<Bubble addBubble={props.addBubble}
					removeBubble={props.removeBubble}
					updateBubble={props.updateBubble}
					identifier={identifier}
					title={title}>
			</Bubble>
			<VerticalLine isEven={props.isEven}></VerticalLine>
			<Comment identifier={identifier}
					isEven={props.isEven}
					updateBubble={props.updateBubble}
					isImage={isImage}
					comment={comment}></Comment>
		</div>
	)
}