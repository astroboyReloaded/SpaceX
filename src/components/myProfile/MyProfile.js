import MyMissions from './MyMissions';
import MyRockets from './MyRockets';
import profile from '../../styles/myProfile.module.css';

const MyProfile = () => (
  <div className={profile.mainContainer}>
    <MyMissions />
    <MyRockets />
  </div>
);

export default MyProfile;
