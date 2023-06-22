import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missionsSlice';
import MissionBadge from './MissionBadge';
import JoinBtn from './JoinBtn';
import style from '../../styles/missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions, loading, error } = useSelector((state) => state.missions);

  useEffect(() => {
    if (missions.length) return;
    dispatch(fetchMissions());
  }, [missions, dispatch]);

  return (
    <>
      {loading && <span>loading...</span>}
      {missions.length > 0 && (
        <table className={style.table}>
          <tr className={style.tableRow}>
            <th className={style.tableData}>Mission</th>
            <th className={style.tableData}>Description</th>
            <th className={style.tableData}>Status</th>
          </tr>
          {missions.map((mission) => (
            <tr className={style.tableRow} key={mission.id}>
              <td className={`${style.tableData} ${style.name}`}>{mission.name}</td>
              <td className={style.tableData}>{mission.description}</td>
              <td className={style.tableData}>
                <MissionBadge joined={mission.joined} />
              </td>
              <td className={style.tableData}>
                <JoinBtn
                  id={mission.id}
                  joined={mission.joined}
                />
              </td>
            </tr>
          ))}
        </table>
      )}
      {error && <span>error</span>}
    </>
  );
};

export default Missions;
