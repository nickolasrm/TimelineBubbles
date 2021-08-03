import { ParagraphStyle } from './style.module.css'

/**
 * Adds a div with left padding
 * @param {Object} props 
 * @param {Object} props.children
 * @returns 
 */
export default function Paragraph(props)
{
	return <div className={ParagraphStyle}>
		{props.children}
	</div>
}