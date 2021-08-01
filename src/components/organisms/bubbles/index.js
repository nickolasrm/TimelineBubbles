import { useEffect } from 'react'
import { ContainerStyle } from './style.module.css'
import nextId from 'react-id-generator'
import CommentedBubble from '../../molecules/commented_bubble/index'

/**
 * Stores all bubbles inside of it and aligns them
 * @param {Object} props 
 * @param {Object} props.children
 * @param {Array} props.bubbles - Array containing bubbles data
 * @param {Function(Array)} props.setBubble - Function to update bubbles state array
 * @returns 
 */
export default function Bubbles(props)
{
	const { bubbles, setBubbles } = props

	/** Detects if the array is empty or if it was cleared */
	useEffect(() => {
		if (bubbles.length === 0)
			setBubbles([nextId()])
	}, [bubbles, setBubbles])

	/**
	 * Removes a bubble from the bubbles list
	 * @param {Int} key - A bubble index
	 */
	function removeBubble(key)
	{
		if(bubbles.length > 1)
			setBubbles(props.bubbles.filter(el => {
				return key !== el
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
			if (el !== key)
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
		<div className={`d-flex w-100 h-100 align-items-center 
			justify-content-center flex-row ` + ContainerStyle}>
			{bubbles.map((key, i) => 
				<CommentedBubble key={key}
					identifier={key}
					addBubble={addBubble}
					removeBubble={removeBubble}
					isEven={i % 2 === 0}></CommentedBubble>
			)}
		</div>
	)
}