import React, { useState } from 'react'
import Title from '../../molecules/title'
import Toolbar from '../../molecules/toolbar'
import { ContainerStyle } from './style.module.css'
import Bubbles from '../../organisms/bubbles'
import CSSConfigurator from '../../atoms/css_configurator'

/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	/**
	 * Data for configuring app the user defined theme
	 */
	const [theme, setTheme] = useState({primary: '#000', accent: '#eee'})

	/**
	 * Stores bubbles data
	 */
	const [bubbles, setBubbles] = useState([])

	return (<main className={ContainerStyle}>
				<CSSConfigurator theme={theme}></CSSConfigurator>
				<Title className="pt-4"></Title>
				<Bubbles bubbles={bubbles} setBubbles={setBubbles}></Bubbles>
				<Toolbar bubbles={bubbles} setBubbles={setBubbles}
					theme={theme} setTheme={setTheme}></Toolbar>
			</main>)
}