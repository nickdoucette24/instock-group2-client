import './InvalidErrorMessage.scss';

import errorIcon from "../../assets/Icons/error-24px.svg";

const InvalidErrorMessage = ({field}) => {
  return (
    <div className="error-message">
      <img className="error-icon" src={errorIcon} alt="error icon" />
      <p className="p3">That is not a valid {field}</p>
    </div>  
  );
};

export default InvalidErrorMessage;