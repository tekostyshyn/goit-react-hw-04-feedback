import { StyledNotification } from "./Notification.styled";
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <StyledNotification>{message}</StyledNotification>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
