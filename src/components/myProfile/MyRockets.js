import { useSelector } from 'react-redux';
import style from '../../styles/myProfile.module.css';

const MyRockets = () => {
  const { rockets } = useSelector((state) => state.rockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className={style.sectionContainer}>
      <h1>MyItems</h1>
      {reservedRockets.map((rocket) => (
        <article className={style.article} key={rocket.id}>
          <h1>{rocket.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default MyRockets;
