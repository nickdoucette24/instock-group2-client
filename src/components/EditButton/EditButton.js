import "./EditButton.scss";

import editIcon from "../../assets/icons/edit-24px.svg";

const EditButton = () => {
	return (
		<button className="edit-button">
			<img
				className="edit-button__icon"
				src={editIcon}
				alt="edit button icon"
			/>
			<h3 className="edit-button__content">Edit</h3>
		</button>
	);
};

export default EditButton;
