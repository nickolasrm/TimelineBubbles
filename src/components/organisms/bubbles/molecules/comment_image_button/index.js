import ImageButton from '../../atoms/image_button'
import { ButtonContainerStyle, TextButtonStyle } from './style.module.css'

/**
 * Adds a button positioned at the bottom part of a container that converts an image to base64
 * @param {Object} props
 * @param {String} props.className
 * @param {Function(b64Image: String)} props.onImageSelected -
 * Executed whenever an image is selected.
 * @param {String} props.image - Stored b64 image
 * @returns 
 */
export default function CommentImageButton(props)
{
	/**
	 * Fills the image variable with a b64 image
	 * @param {String} b64 
	 */
	function handleImageSelected(b64){ props.onImageSelected(b64) }

	/**
	 * Cleans the image variable up
	 */
	function clearImageHandler(){ props.onImageSelected('') }

	return (
		<div className={ButtonContainerStyle + " print " + (props.className || "")}>
			{
				!props.image ? 
					<ImageButton onImageSelected={handleImageSelected}
						className={TextButtonStyle}>
							Image</ImageButton> :
					<span onClick={clearImageHandler} 
						className={TextButtonStyle}
						data-testid="to_text_comment_button"
						role="button">Text</span>
			}
		</div>
	)
}