import { useRef } from 'react'
import { Folder2 } from "react-bootstrap-icons"
import ButtonContainer from "../../atoms/button_container"
import { InputStyle } from './style.module.css'

/**
 * A folder button used as a new file button
 * @param {Object} props
 * @param {Function(content: String)} props.onFileOpened
 */
export default function OpenButton(props)
{
	const file_input = useRef(undefined)

	/**
	 * Triggers onFileOpened whenever the user selects a json file
	 * @param {Object} ev 
	 */
	function handleFileOpened(ev)
	{
		const file = ev.target?.files[0]
		if (file)
		{
			const fr = new FileReader()
			fr.onload = () => {
				props.onFileOpened(fr.result)
			}
			fr.readAsText(file)
		}
	}

	/**
	 * Triggers the input type file
	 * @param {Object} ev 
	 */
	function handleClick(ev){ 
		file_input.current.value = null
		file_input.current.click() 
	}

	return <ButtonContainer onClick={handleClick}>
		<input className={InputStyle}
			ref={file_input} 
			type="file" 
			data-testid="open-input"
			accept=".json"
			onChange={handleFileOpened}></input>
		<Folder2 size="1.8rem"></Folder2>
	</ButtonContainer>
}