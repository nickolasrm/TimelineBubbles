/**
 * Sets up the css variables for the application
 * @param {Object} props 
 * @param {Object} props.theme - An object containing the theme data
 * @param {String} props.theme.primary - HEX Color used as the main color. e.g. bubbles
 * @param {String} props.theme.accent - HEX Color used as the secondary color. e.g. background
 * @returns 
 */
export default function CSSConfigurator(props)
{
	return (
		<style>{`
			:root
			{
				--background: rgb(33, 37, 41);

				--panel-background: rgb(50, 54, 58);
				--panel-foreground: white;

				--bubble-background: white;
				--bubble-foreground: black;
			}
		`}</style>)
}