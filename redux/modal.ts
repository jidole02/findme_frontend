const SET_MODAL = "modal/SET_MODAL";

type ModalType = "personDetail" | "alert" | "addPerson" | null;

type ModalState = {
  modalType: ModalType;
};

export const setModal = (modal: ModalType) => ({
  type: SET_MODAL,
  modal: modal,
});

const initState: ModalState = {
  modalType: null,
};

type Action = ReturnType<typeof setModal>;

export default function ModalReducer(
  state: ModalState = initState,
  action: Action
): ModalState {
  switch (action.type) {
    case SET_MODAL:
      return {
        modalType: action.modal,
      };
    default:
      return state;
  }
}
