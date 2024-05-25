import "./CancelButton.scss";
import { useNavigate } from "react-router-dom";

const CancelButton = () => {
	let navigate = useNavigate();

	const handleCancel = () => {
		navigate("/");
	}

	return (
		<button className="cancel-button" type="button" onClick={handleCancel}>
			<h3>Cancel</h3>
		</button>
	);
};

export default CancelButton;
