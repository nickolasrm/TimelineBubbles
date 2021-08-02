import CommentImageButton from '../comment_image_button'
import {
	CommentStyle, TextareaStyle, EvenCommentStyle,
	OddCommentStyle, HoveringButtonsStyle, ImageStyle
} from './style.module.css'
import { useEffect, useState, useRef } from 'react'

/**
 * Adds a floating block with text over or under a bubble
 * @param {Object} props 
 * @param {String} props.identifier - bubble identifier of the relative commented bubble
 * @param {String} props.comment - the state is gonna define the value of the textarea or
 * the image base64
 * @param {Boolean} props.isImage - if the comment state contains an image
 * @param {Function(identifier: int, data: Object)} props.updateBubble - will be called
 * whenever the user updates the content of a comment of a bubble
 * @returns 
 */
export default function Comment(props) {
	const [image, setImage] = useState('')

	/**
	 * Used to define the value of the textarea or image whenever the user opens a file
	 */
	const { comment, isImage } = props
	const textareaRef = useRef(undefined)
	useEffect(() => {
		const handleChange = () => {
			if (isImage)
				setImage(comment)
			else if(textareaRef.current && comment !== textareaRef.current.innerHTML)
				textareaRef.current.innerHTML = comment
		}
		handleChange()
	}, [comment, isImage])

	/** Updates the bubble comment if an image is added */
	const { identifier, updateBubble } = props
	useEffect(() => {
		const handleImageChange = () => {
			updateBubble(identifier, { 
				isImage: image !== '', 
				comment: image 
			})
		}
		handleImageChange()
	}, [image])

	/**
	 * Updates bubbles when the textarea is changed
	 * @param {Object} ev 
	 */
	function handleTextChange(ev) {
		props.updateBubble(props.identifier, { isImage: false, comment: ev.target.innerHTML })
	}

	return (
		<div className={CommentStyle + " " +
			(props.isEven ? EvenCommentStyle : OddCommentStyle)}>
			{!image ?
				<div ref={textareaRef}
					className={TextareaStyle}
					onInput={handleTextChange}
					contentEditable={true}
					spellCheck={false}></div> :
				<img src={image} className={ImageStyle}
					alt="Bubble"></img>
			}
			<CommentImageButton onImageSelected={setImage} image={image}
				className={HoveringButtonsStyle}></CommentImageButton>
		</div>
	)
}