import { useEffect, useRef } from 'react'
import { ContainerStyle, InputStyle } from './style.module.css'
import { KEY_BACK_SPACE, KEY_RETURN } from 'keycode-js'

/**
 * A bubble is a circular object displayed with a text in it
 * @param {Object} props
 * @param {String} props.defaultValue - initial value of the bubble
 * @param {Function(key: int)} props.addBubble - will be called whenever the user 
 * press the return key
 * @param {Function(key: int)} props.removeBubble - will be called whenever the user
 * press backspace with the empty input field to a bubble the moment it is created
 * @param {Int} props.identifier - key of a bubble in the bubbles array
 * @returns 
 */
export default function Bubble(props) {

	const inputRef = useRef(undefined)

	function onKeyDownHandler(event)
	{
		// If backspace and input is empty, then remove
		if (event.keyCode === KEY_BACK_SPACE && 
			inputRef.current.value === "")
			props?.removeBubble(props.identifier)
		// If the user press the return key, then create a new bubble
		else if(event.keyCode === KEY_RETURN)
			props?.addBubble(props.identifier)
	}

	// Focus when a new bubble is created
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div className={`rounded-circle d-flex align-items-center 
						justify-content-center ` + ContainerStyle}>
			<input ref={inputRef} className={InputStyle} 
				onKeyDown={onKeyDownHandler}
				defaultValue={props.defaultValue || (new Date()).getFullYear()}></input>
		</div>)
}