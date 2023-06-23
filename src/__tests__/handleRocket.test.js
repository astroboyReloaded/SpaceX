import { handleRocket } from "../redux/rockets/rocketsSlice";

describe('handleRocket', () => {
  test('should return the correct action', () => {
    const id = '1';
    const expectedAction = {
      type: 'rockets/handleRocket',
      payload: id,
    };
    expect(handleRocket(id)).toEqual(expectedAction);
  });
});
