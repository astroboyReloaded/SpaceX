import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, handleMission } from '../redux/missions/missionsSlice';
import ReserveBtn from './ReserveBtn';
// import Badge from './Badge';
// import ReserveBtn from './ReserveBtn';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);
  console.log(missions);

  useEffect(() => {
    if (missions.length) return;
    dispatch(fetchMissions());
  }, [missions, dispatch]);

  return (
    <>
      <table>
        <tr>
          <th>Mission</th>
          <th>description</th>
          <th>Status</th>
        </tr>
        {missions.map((mission) => (
          <tr key={mission.id}>
            <td>{mission.name}</td>
            <td>{mission.description}</td>
            {/* <td><Badge /></td> */}
            <td>
              <ReserveBtn
                id={mission.id}
                reserved={mission.reserved}
                handleReservation={handleMission}
                label={mission.reserved ? 'Leave Mission' : 'Join Mission'}
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Missions;
