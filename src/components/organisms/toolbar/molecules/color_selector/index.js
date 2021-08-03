import ButtonContainer from '../../atoms/button_container'
import { ColorSelectorStyle } from './style.module.css'

/** 
 * A button used for selecting color. Should be used in a toolbar
 * @param {Object} props
 * @param {String} props.color
 * @param {Function(colorHex: String)} props.onColorChange - 
 * Triggered whenever the user changes the color
 * @param {String} props.className
 */
export default function ColorSelector(props)
{
	/**
	 * Sets the color whenever the user changes an input color
	 * @param {Event} ev 
	 */
	function handleChange(ev){ props.onColorChange(ev.target.value) }

	return <ButtonContainer>
		<input type="color" 
			data-testid={props.testid}
			className={ColorSelectorStyle + " " + props.className || ""}
			onChange={handleChange}
			value={props.color || "#000000"}
		></input>
	</ButtonContainer>
}