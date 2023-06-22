import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ReserveBtn = ({
  id,
  handleReservation,
  label,
}) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(handleReservation(id))}
    >
      {label}
    </button>
  );
};

export default ReserveBtn;

ReserveBtn.propTypes = {
  id: PropTypes.string.isRequired,
  handleReservation: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
