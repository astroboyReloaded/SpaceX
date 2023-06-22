import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { handleMission } from '../../redux/missions/missionsSlice';
import style from '../../styles/JoinBtn.module.css';

const JoinBtn = ({ id, joined }) => {
  const dispatch = useDispatch();

  return (
    <button
      type="button"
      onClick={() => dispatch(handleMission(id))}
      className={style.joinButton}
    >
      {joined ? 'Leave Mission' : 'Join Mission'}
    </button>
  );
};

export default JoinBtn;

JoinBtn.propTypes = {
  id: PropTypes.string.isRequired,
  joined: PropTypes.bool.isRequired,
};
