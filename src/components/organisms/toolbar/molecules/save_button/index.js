import { Save } from "react-bootstrap-icons"
import ButtonContainer from "../../atoms/button_container"

/**
 * A save button used for file saving button
 * @param {Object} props
 * @param {Function(ev: Object)} props.onClick
 */
export default function SaveButton(props)
{
	return <ButtonContainer 
			onClick={props.onClick}
			testid="save-button">
		<Save size="1.5rem"></Save>
	</ButtonContainer>
}