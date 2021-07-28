import { useState } from 'react'
import { ContainerStyle } from './style.module.css'
import nextId from 'react-id-generator'
import Bubble from '../../atoms/bubble/index'

/**
 * Stores all bubbles inside of it and aligns them
 * @param {Object} props 
 * @param {Object} props.children
 * @returns 
 */
export default function Bubbles(props)
{
	/**
	 * Array containing bubble elements
	 */
	const [bubbles, setBubbles] = useState([nextId()])

	/**
	 * Removes a bubble from the bubbles list
	 * @param {Int} key - A bubble index
	 */
	function removeBubble(key)
	{
		if(bubbles.length > 1)
			setBubbles(bubbles.filter(el => {
				if (key != el)
					return el
			}))
	}

	/**
 	 * Adds a bubble into the bubbles list
	 * @param {Int} key - A bubble key
	 */
	function addBubble(key)
	{
		const newBubbles = []
		bubbles.forEach(el => {
			if (el != key)
				newBubbles.push(el)
			else
			{
				newBubbles.push(el)
				newBubbles.push(nextId())
			}
		})
		setBubbles(newBubbles)
	}

	return (
		<div className={"d-flex w-100 h-100 align-items-center \
			justify-content-center flex-row " + ContainerStyle}>
			{bubbles.map(key => 
				<Bubble key={key}
					identifier={key}
					addBubble={addBubble}
					removeBubble={removeBubble}></Bubble>
			)}
		</div>
	)
}