const SET_LOCATION = "map/SET_MY_LOCATION";

type LocationState = {
  x: number;
  y: number;
};

export const setLocation = (x: number, y: number) => ({
  type: SET_LOCATION,
  x: x,
  y: y,
});

const initState: LocationState = {
  x: 0,
  y: 0,
};

type ActionType = ReturnType<typeof setLocation>;

export default function LocationReducer(
  state: LocationState = initState,
  action: ActionType
): LocationState {
  switch (action.type) {
    case SET_LOCATION:
      return {
        x: action.x,
        y: action.y,
      };
    default:
      return state;
  }
}
