import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleRocket } from '../redux/rockets/rocketsSlice';
import style from '../styles/reserveBtn.module.css';

const ReserveBtn = ({
  id,
  reserved,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(handleRocket(id))}
      className={`${style.reserveButton} ${reserved && style.cancellButton}`}
    >
      {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
    </button>
  );
};

export default ReserveBtn;

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
