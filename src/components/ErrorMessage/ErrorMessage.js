import './ErrorMessage.scss';

import errorIcon from "../../assets/Icons/error-24px.svg";

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <img className="error-icon" src={errorIcon} alt="error icon" />
      <p className="p3">This field is required</p>
    </div>  
  );
};

export default ErrorMessage;