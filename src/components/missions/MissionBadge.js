import PropTypes from 'prop-types';
import style from '../../styles/missionBadge.module.css';

const MissionBadge = ({ joined }) => (
  <span
    className={`${style.missionBadge} ${joined && style.active}`}
  >
    {joined ? 'Active Member' : 'NOT A MEMBER'}
  </span>
);

export default MissionBadge;

MissionBadge.propTypes = {
  joined: PropTypes.bool.isRequired,
};
