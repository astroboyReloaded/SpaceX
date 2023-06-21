import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, handleRocket } from '../redux/rockets/rocketsSlice';
import style from '../styles/rockets.module.css';
import ReserveBtn from './ReserveBtn';
import Badge from './Badge';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length) return;
    dispatch(fetchRockets());
  }, [rockets, dispatch]);

  return (
    <>
      <h1>Rockets</h1>
      <section>
        {loading && <span>loading...</span>}
        {rockets.map((rocket) => (
          <article key={rocket.id} className={style.article}>
            <img className={style.img} src={rocket.img} alt={rocket.name} />
            <h1>{rocket.name}</h1>
            <Badge reserved={rocket.reserved} />
            <p>{rocket.description}</p>
            <ReserveBtn
              id={rocket.id}
              reserved={rocket.reserved}
              handleReservation={handleRocket}
              label={rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
            />
          </article>
        ))}
        {error && <span>error</span>}
      </section>
    </>
  );
};

export default Rockets;
