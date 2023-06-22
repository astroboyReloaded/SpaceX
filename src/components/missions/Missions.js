import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, handleMission } from '../../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const { missions } = useSelector((state) => state.missions);

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
            <td>badge</td>
            <td>
              <JoinBtn
                id={mission.id}
                reserved={mission.joined}
                handleReservation={handleMission}
                label={mission.joined ? 'Leave Mission' : 'Join Mission'}
              />
            </td>
          </tr>
        ))}
      </table>
    </>
  );
};

export default Missions;
