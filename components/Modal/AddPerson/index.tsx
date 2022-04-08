import { getFileData } from "../../../utils/getFileData";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/modal";
import { AddPersonViewProps } from "./type";
import AddPersonView from "./view";
import { addMissingPerson, getImageUrl } from "../../../api/person";

export default function AddPerson() {
  const [fileName, setFileName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [data, setData] = useState({
    name: "",
    adress: "",
    age: 0,
    description: "",
  });
  const dispatch = useDispatch();

  const getFile = (event) => {
    getFileData(event).then(async (res) => {
      setFileName(res.file.name);
      const fd = new FormData();
      fd.append("file", res.file);
      const data = (await getImageUrl({ fd: fd })).data;
      setImageUrl(`${process.env.NEXT_PUBLIC_URL}${data.url}`);
    });
  };

  function handleInput(
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setData({
      ...data,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  function subData() {
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(data.adress, async function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        await addMissingPerson({
          name: data.name,
          age: data.age,
          adress: data.adress,
          x: result[0].y,
          y: result[0].x,
          image: imageUrl,
          description: data.description,
        });
        dispatch(setModal(null));
        alert("등록되었습니다.");
      }
    });
  }

  const props: AddPersonViewProps = {
    handleInput,
    subData,
    fileName,
    getFile,
  };

  return <AddPersonView {...props} />;
}
