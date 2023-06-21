import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

const ReserveBtn = ({
  id,
  reserved,
  handleReservation,
  label,
}) => {
  const dispatch = useDispatch();
  console.log(reserved);

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
  reserved: PropTypes.bool.isRequired,
  handleReservation: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
