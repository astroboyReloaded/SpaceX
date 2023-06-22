import PropTypes from 'prop-types';
import style from '../styles/rocketBadge.module.css';

const RocketBadge = ({ reserved }) => (
  <span
    className={`${style.rocketBadge} ${reserved && style.showBadge}`}
  >
    Reserved
  </span>
);

export default RocketBadge;

RocketBadge.propTypes = {
  reserved: PropTypes.bool.isRequired,
};
