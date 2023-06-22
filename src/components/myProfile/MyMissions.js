import { useSelector } from 'react-redux';
import style from '../../styles/myProfile.module.css';

const MyMissions = () => {
  const { missions } = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className={style.sectionContainer}>
      <h1>MyItems</h1>
      {joinedMissions.map((mission) => (
        <article className={style.article} key={mission.id}>
          <h1>{mission.name}</h1>
        </article>
      ))}
    </section>
  );
};

export default MyMissions;
