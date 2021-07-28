import { useState } from 'react'
import { ContainerStyle, InputStyle } from './style.module.css'

/**
 * A bubble is a circular object displayed with a text in it
 * @param {Object} props
 * @param {String} props.defaultValue the value it is gonna be added 
 * to a bubble the moment it is created
 * @returns 
 */
export default function Bubble(props) {

	return (
		<div className={"rounded-circle d-flex align-items-center \
						justify-content-center " + ContainerStyle}>
			<input className={InputStyle} 
				defaultValue={props.defaultValue || (new Date()).getFullYear()}></input>
		</div>)
}