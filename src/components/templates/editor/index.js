import React, { useState } from 'react'
import Title from '../../organisms/title'
import Toolbar from '../../organisms/toolbar'
import { ContainerStyle } from './style.module.css'
import Bubbles from '../../organisms/bubbles'
import CSSConfigurator from '../../organisms/css_configurator'
import TutorialButton from '../../organisms/routes/molecules/tutorial_button'

/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	/**
	 * Data for configuring app the user defined theme
	 */
	const [theme, setTheme] = useState({
		primary: '#ffffff', 
		accent: '#212529',
		isPrinting: false})

	/**
	 * Stores bubbles data
	 */
	const [bubbles, setBubbles] = useState([])

	return (<main id="toPrint" className={ContainerStyle}>
				<CSSConfigurator theme={theme}></CSSConfigurator>
				<Title isAnimated={true}></Title>
				<Bubbles bubbles={bubbles} setBubbles={setBubbles}></Bubbles>
				<Toolbar bubbles={bubbles} setBubbles={setBubbles}
					theme={theme} setTheme={setTheme}></Toolbar>
				<TutorialButton></TutorialButton>
			</main>)
}