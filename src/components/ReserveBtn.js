import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { cancelRocket, reserveRocket } from '../redux/rockets/rocketsSlice';

const ReserveBtn = ({ id, reserved }) => {
  const dispatch = useDispatch();

  const handleReservation = () => {
    if (reserved) {
      dispatch(cancelRocket(id));
    } else {
      dispatch(reserveRocket(id));
    }
  };

  return (
    <button type="button" onClick={handleReservation}>{reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
  );
};

export default ReserveBtn;

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
