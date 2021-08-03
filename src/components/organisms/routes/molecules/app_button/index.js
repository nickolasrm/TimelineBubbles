import { ArrowReturnLeft } from 'react-bootstrap-icons'
import CornerButtonContainer from '../../atoms/corner_button_container'

/**
 * Button that redirects to the app route
 * @returns 
 */
export default function AppButton()
{
	return <CornerButtonContainer
			href="/"
			testid="go-to-app-button">
		<ArrowReturnLeft size="2rem"></ArrowReturnLeft>
	</CornerButtonContainer>
}