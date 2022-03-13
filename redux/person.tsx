const SET_ID = "person/SET_ID";

type PersonState = {
  id: number | string | null;
};

export const setId = (id: string | null | number) => ({
  type: SET_ID,
  id: id,
});

const initState: PersonState = {
  id: null,
};

type Action = ReturnType<typeof setId>;

export default function PersonReducer(
  state: PersonState = initState,
  action: Action
) {
  switch (action.type) {
    case SET_ID:
      return {
        id: action.id,
      };
    default:
      return state;
  }
}
