import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';

const Rockets = () => {
  const dispatch = useDispatch();
  const { rockets, loading, error } = useSelector((state) => state.rockets);
  console.log(rockets);

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
          <article key={rocket.id}>
            <img src={rocket.img} alt={rocket.name} />
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
          </article>
        ))}
        {error && <span>error</span>}
      </section>
    </>
  );
};

export default Rockets;
