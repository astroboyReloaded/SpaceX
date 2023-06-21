import PropTypes from 'prop-types';

const Badge = ({ reserved }) => (
  <>
    <span className={reserved ? 'Badge' : 'hide'}>{reserved ? 'Reserved' : ''}</span>
  </>
);

export default Badge;

Badge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
