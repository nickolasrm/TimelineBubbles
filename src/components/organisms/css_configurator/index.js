/**
 * Sets up the css variables for the application
 * @param {Object} props 
 * @param {Object} props.theme - An object containing the theme data
 * @param {String} props.theme.primary - HEX Color used as the main color. e.g. bubbles
 * @param {String} props.theme.accent - HEX Color used as the secondary color. e.g. background
 * @param {Boolean} props.theme.isPrinting - A boolean that makes panels transparent for printing
 * @returns 
 */
export default function CSSConfigurator(props) {
	const { primary, accent, isPrinting } = props.theme

	/* 
	 * Snippet by Paul .S
	 * https://stackoverflow.com/questions/30970648/changing-hex-codes-to-rgb-values-with-javascript
	 */

	/**
	 * Converts a hex to rgb color
	 * @param {String} color 
	 * @returns {Object} 
	 */
	function hexToRgb(color) {
		const m = color.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i)
		return {
			r: parseInt(m[1], 16),
			g: parseInt(m[2], 16),
			b: parseInt(m[3], 16)
		}
	}


	/* 
	 * Snippet by Matt Stevens
	 * https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
	 */

	/**
	 * Converts rgb to hex
	 * @param {Int} r 
	 * @param {Int} g 
	 * @param {Int} b 
	 * @returns {String} hex color
	 */
	function rgbToHex(r, g, b){
		return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1,7)
	}

	/**
	 * Returns black or white depending on the luminosity of a color
	 * @param {Int} r 
	 * @param {Int} g
	 * @param {Int} b
	 * @returns {String} hex color black or white
	 */
	function blackOrWhiteRGB(r, g, b) {
		const yiq = (r * 299 + g * 587 + b * 114) / 1000
		return (yiq >= 128) ? '#000000' : '#ffffff'
	}

	/*
	 * Snippets by Harthur
	 * https://harthur.github.io/brain/
	 */

	/**
	 * Returns black or white depending on the luminosity of a color
	 * @param {String} color - hex color
	 * @returns {String} hex color
	 */
	function blackOrWhite(color) {
		const { r, g, b } = hexToRgb(color)
		return blackOrWhiteRGB(r, g, b)
	}

	/**
	 * Calculates the panel color based on another color
	 * @param {String} color - hex color
	 * @returns {String} hex color
	 */
	function panelColor(color)
	{
		const {r, g, b} = hexToRgb(color)
		const factor = 25
		const min = (v) => Math.max(v - factor, 0)
		const max = (v) => Math.min(v + factor, 255)

		if (blackOrWhiteRGB(r, g, b) === '#000000')
			return rgbToHex(min(r), min(g), min(b))
		else 
			return rgbToHex(max(r), max(g), max(b))
	}

	return (
		<style data-testid="theme-style">{`
			:root
			{
				--background: ${accent};

				--panel-background: ${panelColor(accent)};
				--panel-foreground: ${blackOrWhite(accent)};

				--bubble-background: ${primary};
				--bubble-foreground: ${blackOrWhite(primary)};
			}
			.print{${isPrinting ? "display: none !important;" : ""}}
			.disable-anim{${isPrinting ? "animation: none !important;" : ""}}
			.disable-trans{${isPrinting ? "transition: none !important;" : ""}}
		`}</style>)
}