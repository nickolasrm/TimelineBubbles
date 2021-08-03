import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import App from '../App'

/**
 * Creates a new main container and loads the app in it
 * @returns {Object} app
 * @returns {Node} app.main - app html node
 * @returns {Function(query: String)} app.$ - app querying interface
 */
export function createApp()
{
	const main = document.createElement('div')
	const $ = query => main.querySelectorAll(query)
	const tid = testid => main.querySelectorAll(`[data-testid="${testid}"]`)

	document.body.appendChild(main)
	act(() => {
		ReactDOM.render(<App />, main)
	})

	return { main, $, tid }
}

/**
 * Finishes the app by removing the app from document.body
 * @param {Object} main 
 */
export function finishApp(main)
{
	document.body.removeChild(main)
	main = null
}