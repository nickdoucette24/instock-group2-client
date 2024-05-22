import "./BackButton.scss";

import backIcon from "../../assets/Icons/arrow_back-24px.svg";

const BackButton = () => {
	return (
		<button className="back-button">
			<img
				className="back-button__icon"
				src={backIcon}
				alt="back button icon"
			/>
		</button>
	);
};

export default BackButton;
