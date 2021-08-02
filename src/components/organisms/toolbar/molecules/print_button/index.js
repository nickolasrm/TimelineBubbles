import { FileImage } from "react-bootstrap-icons"
import ButtonContainer from "../../atoms/button_container"

/**
 * A folder button used as a new file button
 * @param {Object} props
 * @param {Function(ev: Object)} props.onClick
 */
export default function PrintButton(props)
{	
	return <ButtonContainer onClick={props.onClick}>
		<FileImage size="1.6rem"></FileImage>
	</ButtonContainer>
}