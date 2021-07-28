import React from 'react'
import Title from '../../molecules/title'
import Toolbar from '../../molecules/toolbar'
import { ContainerStyle } from './style.module.css'
import Bubbles from '../../organisms/bubbles/index'

/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	return (<main className={ContainerStyle}>
					<Title className="pt-4"></Title>
					<Bubbles></Bubbles>
					<Toolbar></Toolbar>
			</main>)
}