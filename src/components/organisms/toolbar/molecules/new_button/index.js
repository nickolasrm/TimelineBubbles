import { Plus } from "react-bootstrap-icons"
import ButtonContainer from "../../atoms/button_container"

/**
 * A plus button used as a new file button
 * @param {Object} props
 * @param {Function(ev: Object)} props.onClick
 */
export default function NewButton(props)
{
	return <ButtonContainer onClick={props.onClick}>
		<Plus size="1.8rem"></Plus>
	</ButtonContainer>
}