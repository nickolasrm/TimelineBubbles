import React, { useEffect } from 'react'
import { ToolbarStyle } from './style.module.css'
import FileSaver from 'file-saver'
import ColorSelector from './molecules/color_selector'
import NewButton from './molecules/new_button'
import OpenButton from './molecules/open_button'
import SaveButton from './molecules/save_button'
import PrintButton from './molecules/print_button'
import html2canvas from "html2canvas/dist/html2canvas"

/**
 * Contains the new, open and save buttons and triggers for making a
 * rounded toolbar
 * @param {Object} props 
 * @param {String} props.className 
 * @param {Object} props.theme - Contains variables relative to the theme. e.g. colors
 * @param {Function(Object)} props.setTheme - Sets the theme state object
 * @param {Array} props.bubbles - Contains data relative to bubbles
 * @param {Function(Array)} props.setBubbles - Sets the bubbles array
 * @returns {Toolbar}
 */
export default function Toolbar(props) {
	const { theme, setTheme } = props
	const { primary, accent, isPrinting } = theme
	const { bubbles, setBubbles } = props

	/** Changes the primary color into the theme object
	 * @param {String} color - hex color
	 */
	function setPrimaryColor(color) { setTheme({ ...theme, primary: color }) }
	/** Changes the accent color into the theme object
	 * @param {String} color - hex color
	 */
	function setAccentColor(color) { setTheme({ ...theme, accent: color }) }

	/**
	 * Clears the bubbles array when an user clicks the new button
	 * @param {Object} ev 
	 */
	function handleNewFileClick(ev) { setBubbles([]) }

	/**
	 * Saves bubbles array and theme into a json file when an user clicks the save button
	 * @param {Object} ev 
	 */
	function handleSaveFileClick(ev) {
		const toSave = new Blob([JSON.stringify({ theme, bubbles })],
			{ type: 'text/plain;charset=utf-8' })
		FileSaver.saveAs(toSave, 'bubbles.json')
	}

	/**
	 * Loads bubbles array and theme into the application when an user loads a file after 
	 * clicking the open button
	 * @param {String} content - file content
	 */
	function handleFileOpened(content) {
		const obj = JSON.parse(content)
		if (obj.theme && obj.bubbles) {
			setTheme(obj.theme)
			setBubbles(obj.bubbles)
		}
		else
			alert('Incompatible or corrupted file!')
	}

	/**
	 * Prints the app page when an user clicks the print button
	 * @param {Object} ev 
	 */
	function handlePrintClick(ev) { setTheme({ ...theme, isPrinting: true }) }
	useEffect(() => {
		if (isPrinting) {
			html2canvas(document.querySelector('#toPrint'), {
				scrollX: -window.scrollX,
				scrollY: -window.scrollY,
				windowWidth: document.documentElement.offsetWidth,
				windowHeight: document.documentElement.offsetHeight
			}).then(canvas => {
				canvas.toBlob(blob => {
					FileSaver.saveAs(blob, "timeline.png")
				})
			})
			setTheme({ ...theme, isPrinting: false })
		}
	}, [isPrinting]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className={"print"}>
			<div className={ToolbarStyle +
				(props.className || "")}>
				<ColorSelector onColorChange={setPrimaryColor}
					color={primary} testid="primary-selector"></ColorSelector>
				<ColorSelector onColorChange={setAccentColor}
					color={accent} testid="accent-selector"></ColorSelector>
				<NewButton onClick={handleNewFileClick}></NewButton>
				<OpenButton onFileOpened={handleFileOpened}></OpenButton>
				<SaveButton onClick={handleSaveFileClick}></SaveButton>
				<PrintButton onClick={handlePrintClick}></PrintButton>
			</div>
		</div>)
}