const SET_ID = "person/SET_ID";

export const setId = (id: number | string) => ({
  type: SET_ID,
  id: id,
});

const initState = {
  id: null,
};

type Action = ReturnType<typeof setId>;

export default function PersonReducer(state = initState, action: Action) {
  switch (action.type) {
    case SET_ID:
      return {
        id: state.id,
      };
    default:
      return state;
  }
}
