import { useEffect } from 'react'
import { ContainerStyle } from './style.module.css'
import CommentedBubble from './molecules/commented_bubble'
import HorizontalLine from './atoms/horizontal_line'

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

	/**
	 * Generates an unique id for a bubble
	 * @returns Int
	 */
	function nextId() { return new Date().getTime() }

	/** Detects if the array is empty or if it was cleared */
	useEffect(() => {
		if (bubbles.length === 0)
			setBubbles([{
					identifier: new Date().getTime(), 
					title: `${(new Date()).getFullYear()}`,
					isImage: false, 
					comment: '&nbsp;When you tried a new tool!&nbsp;<br>by nickolasrm'
				}])
	}, [bubbles, setBubbles])

	/**
	 * Removes a bubble from the bubbles list
	 * @param {Int} identifier - A bubble index
	 */
	function removeBubble(identifier)
	{
		if(bubbles.length > 1)
			setBubbles(bubbles.filter(el => {
				return identifier !== el.identifier
			}))
	}

	/**
 	 * Adds a bubble into the bubbles list
	 * @param {Int} identifier - A bubble key
	 */
	function addBubble(identifier)
	{
		const newBubbles = []
		bubbles.forEach(el => {
			if (el.identifier !== identifier)
				newBubbles.push(el)
			else
			{
				newBubbles.push(el)
				newBubbles.push({
					identifier: nextId(),
					title: "",
					isImage: false,
					comment: ""
				})
			}
		})
		setBubbles(newBubbles)
	}

	/**
	 * Updates the bubbles array when a bubble data is changed
	 * @param {String} identifier 
	 * @param {Object} content 
	 * @param {Boolean} content.isImage
	 * @param {String} content.data
	 */
	function updateBubble(identifier, content)
	{
		setBubbles(bubbles.map(el => {
			if (el.identifier === identifier)
				el = {...el, ...content}
			return el
		}))
	}

	return (
		<div className={'disable-trans ' + ContainerStyle}
			data-testid="bubbles-container">
			{bubbles.map((b, i) => 
				<CommentedBubble key={b.identifier}
					data={b}
					addBubble={addBubble}
					removeBubble={removeBubble}
					updateBubble={updateBubble}
					isEven={i % 2 === 0}></CommentedBubble>
			)}
			<HorizontalLine></HorizontalLine>
		</div>
	)
}