import { FileInputStyle } from './style.module.css'

/**
 * Image input that reads images as base64
 * @param {Object} props 
 * @param {String} props.className
 * @param {Function(b64: String)} props.onImageSelected
 * @param {String} props.children
 * @returns 
 */
export default function ImageButton(props) {
	/* 
	 * Snippet by Ankit Kumar Rajpoot
	 * https://stackoverflow.com/questions/36580196/reactjs-base64-file-upload
	 */

	/**
	 * Reads a file image from disk
	 * @param {Object} file 
	 * @returns 
	 */
	function convertBase64(file) {
		return new Promise((resolve, reject) => {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(file)
			fileReader.onload = () => {
				resolve(fileReader.result)
			}
			fileReader.onerror = (error) => {
				reject(error)
			}
		})
	}

	/**
	 * Calls onImageSelected passing the base64 encoded file content
	 * @param {Object} event 
	 */
	async function handleOnChange(event) {
		const file = event.target?.files[0]
		if (file)
		{
			const base64 = await convertBase64(file)
			props.onImageSelected(base64)
		}
	}

	return (
		<label className={props.className}>
			<input className={FileInputStyle} 
				type="file" 
				accept="image/*"
				data-testid="to_image_comment_input"
				onChange={handleOnChange} />
			{props.children}
		</label>
	)
}