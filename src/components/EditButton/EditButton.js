import "./EditButton.scss";

import editIcon from "../../assets/Icons/edit-24px.svg";

const EditButton = () => {
	return (
		<button className="btn-edit">
			<img
				className="btn-edit__icon"
				src={editIcon}
				alt="edit button icon"
			/>
			<h3 className="btn-edit__content">Edit</h3>
		</button>
	);
};

export default EditButton;
