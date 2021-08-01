import CommentImageButton from '../comment_image_button'
import { CommentStyle, TextareaStyle, EvenCommentStyle, 
		OddCommentStyle, HoveringButtonsStyle, ImageStyle } from './style.module.css'
import { useState } from 'react'

/**
 * Adds a floating block with text over or under a bubble
 * @param {Object} props 
 * @returns 
 */
export default function Comment(props)
{
	const [image, setImage] = useState('')

	return (
		<div className={CommentStyle + " " + 
				(props.isEven ? EvenCommentStyle : OddCommentStyle)}>
			{image === '' ? 
					<div className={TextareaStyle} contentEditable={true}></div> :
					<img src={image} className={ImageStyle}></img>
				}
			<CommentImageButton onImageSelected={setImage} image={image}
				className={HoveringButtonsStyle}></CommentImageButton>
		</div>
	)
}