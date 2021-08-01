import { ColorSelectorStyle } from './style.module.css'

/** 
 * A button used for selecting color. Should be used in a toolbar
 * @param {Object} props
 * @param {String} props.defaultColor
 * @param {Function(colorHex: String)} props.onColorChange - 
 * Triggered whenever the user changes the color
 */
export default function ColorSelector(props)
{
	/**
	 * Sets the color whenever the user changes an input color
	 * @param {Event} ev 
	 */
	function handleChange(ev){ props.onColorChange(ev.target.value) }

	return <input type="color"
				onChange={handleChange}
				defaultValue={props.defaultColor || "#000000"}
				className={ColorSelectorStyle}
			></input>
}