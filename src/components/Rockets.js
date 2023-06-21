import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <>
      <h1>Rockets</h1>
      <section>
        {loading && <span>loading...</span>}
        {rockets.length && rockets.map((rocket) => (
          <article key={rocket.id}>{rocket.name}</article>
        ))}
        {error && <span>error</span>}
      </section>
    </>
  );
};

export default Rockets;
