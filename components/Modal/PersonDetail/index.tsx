import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { person } from "../../../interfaces/person";
import { setModal } from "../../../redux/modal";
import { PersonDetailProps } from "./type";
import PersonDetailView from "./view";
import { getPersonDetail } from "../../../api/person";
import { useEffect, useState } from "react";

export default function PersonDetail() {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const [person, setPerson] = useState<person>(null);
  const getData = async () => {
    const data = (await getPersonDetail(person_id)).data;
    setPerson(data);
  };

  useEffect(() => {
    getData();
  }, []);

  function successFind() {
    dispatch(setModal("alert"));
  }

  const props: PersonDetailProps = {
    person,
    successFind,
  };

  return <PersonDetailView {...props} />;
}
