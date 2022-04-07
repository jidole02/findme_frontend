import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { setModal } from "../../../redux/modal";
import { ChangeEvent, useState } from "react";
import { AlertPersonViewProps } from "./type";
import axios from "axios";
import AlertPersonView from "./view";

export default function AlertPerson() {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  function handleInput(event: ChangeEvent<HTMLTextAreaElement>) {
    setDescription(event.target.value);
  }

  function alertPerson() {
    axios
      .delete(
        `${process.env.NEXT_PUBLIC_URL}/write/alert?id=${person_id}&description=${description}`
      )
      .then((res) => {
        alert("신고해주셔서 감사합니다");
        dispatch(setModal(null));
      });
  }

  const props: AlertPersonViewProps = {
    handleInput,
    alertPerson,
  };

  return <AlertPersonView {...props} />;
}
