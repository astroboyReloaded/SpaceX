import PropTypes from 'prop-types';

const Badge = ({ reserved, label, type }) => (
  <>
    {type === 'rocket' && <span className={reserved ? 'rocketBadge' : 'hide'}>{label}</span>}
    {type === 'mission' && <span className={reserved ? 'missionBadge' : 'missionBadgeNAM'}>{label}</span>}
  </>
);

export default Badge;

Badge.propTypes = {
  reserved: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
