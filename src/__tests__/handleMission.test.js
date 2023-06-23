import { handleMission } from '../redux/missions/missionsSlice';

describe('handleMission', () => {
  it('returns the correct action', () => {
    const id = 'a';
    const expectedAction = {
      type: 'missions/handleMission',
      payload: id,
    };
    expect(handleMission(id)).toEqual(expectedAction);
  });
});
