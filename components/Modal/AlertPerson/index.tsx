import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { setModal } from "../../../redux/modal";
import { ChangeEvent, useState } from "react";
import { AlertPersonViewProps } from "./type";
import AlertPersonView from "./view";
import { alertMissingPerson } from "../../../api/person";

export default function AlertPerson() {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  async function alertPerson() {
    await alertMissingPerson({ id: person_id, description: description });
    alert("신고해주셔서 감사합니다");
    dispatch(setModal(null));
  }

  const props: AlertPersonViewProps = {
    handleInput,
    alertPerson,
  };

  return <AlertPersonView {...props} />;
}
