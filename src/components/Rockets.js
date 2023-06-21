import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, reserveRocket } from '../redux/rockets/rocketsSlice';
import style from '../styles/rockets.module.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [rockets.length, dispatch]);

  // const handleReserve = (id) => {
  //   dispatch(reserveRocket(id));
  // };

  return (
    <>
      <h1>Rockets</h1>
      <section>
        {loading && <span>loading...</span>}
        {rockets.map((rocket) => (
          <article key={rocket.id} className={style.article}>
            <img className={style.img} src={rocket.img} alt={rocket.name} />
            <h1>{rocket.name}</h1>
            <span>{rocket.reserved && 'Reserved'}</span>
            <p>{rocket.description}</p>
            <button type="button" onClick={() => dispatch(reserveRocket(rocket.id))}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
          </article>
        ))}
        {error && <span>error</span>}
      </section>
    </>
  );
};

export default Rockets;
