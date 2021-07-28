import React from 'react'
import Title from '../../molecules/title'
import Toolbar from '../../molecules/toolbar'
import Bubble from '../../atoms/bubble'
import { ContainerStyle } from './style.module.css'
import { Container } from 'react-bootstrap'
import BubblesContainer from '../../atoms/bubbles_container/index'

/**
 * Template app editor
 * @returns 
 */
export default function TemplateEditor()
{
	return (<main className={ContainerStyle}>
					<Title className="pt-4"></Title>
					<BubblesContainer>
						<Bubble></Bubble>
						<Bubble></Bubble>
						<Bubble></Bubble>
						<Bubble></Bubble>
						<Bubble></Bubble>
						<Bubble></Bubble>
					</BubblesContainer>
					<Toolbar></Toolbar>
			</main>)
}