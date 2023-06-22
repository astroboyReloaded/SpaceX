import { useSelector } from 'react-redux';
import style from '../../styles/myProfile.module.css';

const MyMissions = () => {
  const { missions } = useSelector((state) => state.missions);

  return (
    <section className={style.sectionContainer}>
      <h1>MyItems</h1>
      {missions.map((mission) => mission.reserved && (
        <article className={style.article} key={mission.id}>
          <h1>{mission.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default MyMissions;
