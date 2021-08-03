import { Info } from 'react-bootstrap-icons'
import CornerButtonContainer from '../../atoms/corner_button_container'

/**
 * Button that redirects to the tutorial route
 * @returns 
 */
export default function TutorialButton()
{
	return <CornerButtonContainer
			href="/tutorial"
			testid="go-to-tutorial-button">
		<Info size="2rem"></Info>
	</CornerButtonContainer>
}