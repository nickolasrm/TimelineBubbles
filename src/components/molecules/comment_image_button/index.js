import Base64ImageInputButton from '../../atoms/base64_image_input_button'
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
	 * Cleans the image variable
	 */
	function clearImageHandler(){ props.onImageSelected('') }

	return (
		<div className={ButtonContainerStyle + " " + (props.className || "")}>
			{
				props.image === '' ? 
					<Base64ImageInputButton onImageSelected={handleImageSelected}
						className={TextButtonStyle}>Image</Base64ImageInputButton> :
					<span onClick={clearImageHandler} 
						className={TextButtonStyle}
						role="button">Text</span>
			}
		</div>
	)
}