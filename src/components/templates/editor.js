import React from 'react'
import Title from '../molecules/title/title'
import Toolbar from '../molecules/toolbar/toolbar'
import { ContainerStyle } from './editor.module.css'
import { Container } from 'react-bootstrap'

/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	return (<main className={"bg-dark " + ContainerStyle}>
				<Container fluid="true">
					<Title className="pt-4"></Title>
					<Toolbar></Toolbar>
				</Container>
			</main>)
}