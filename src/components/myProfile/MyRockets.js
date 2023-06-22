import { useSelector } from 'react-redux';
import style from '../../styles/myProfile.module.css';

const MyRockets = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <section className={style.sectionContainer}>
      <h1>MyItems</h1>
      {rockets.map((rocket) => rocket.reserved && (
        <article className={style.article} key={rocket.id}>
          <h1>{rocket.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default MyRockets;
