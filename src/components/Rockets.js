import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import style from '../styles/rockets.module.css';
import ReserveBtn from './ReserveBtn';
import RocketBadge from './RocketBadge';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [rockets, dispatch]);

  return (
    <section>
      {loading && <span>loading...</span>}
      {rockets.map((rocket) => (
        <article key={rocket.id} className={style.article}>
          <img className={style.img} src={rocket.img} alt={rocket.name} />
          <h1 className={style.name}>{rocket.name}</h1>
          <p>
            <RocketBadge reserved={rocket.reserved} />
            {rocket.description}
          </p>
          <ReserveBtn
            id={rocket.id}
            reserved={rocket.reserved}
          />
        </article>
      ))}
      {error && <span>error</span>}
    </section>
  );
};

export default Rockets;
