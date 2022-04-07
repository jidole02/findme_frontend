import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { person } from "../../../interfaces/person";
import { setModal } from "../../../redux/modal";
import { useQuery } from "react-query";
import { PersonDetailProps } from "./type";
import axios from "axios";
import PersonDetailView from "./view";

export default function PersonDetail() {
  const person_id = useSelector((state: RootState) => state.PersonReducer.id);
  const dispatch = useDispatch();
  const { data, isLoading, error } = useQuery("getDetail", async () => {
    const { data } = await axios.get(
      process.env.NEXT_PUBLIC_URL + `/missing?id=${person_id}`
    );
    return data;
  });
  const person: person = data;

  function successFind() {
    dispatch(setModal("alert"));
  }

  const props: PersonDetailProps = {
    person,
    successFind,
  };

  if (isLoading) return <h1>로딩중...</h1>;
  if (error) return <h1>에러가 발생하였습니다.</h1>;
  return <PersonDetailView {...props} />;
}
