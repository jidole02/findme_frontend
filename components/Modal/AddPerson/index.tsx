import { getFileData } from "../../../utils/getFileData";
import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { setModal } from "../../../redux/modal";
import { AddPersonViewProps } from "./type";
import axios from "axios";
import AddPersonView from "./view";

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

  function getFile(event) {
    getFileData(event).then((res) => {
      setFileName(res.file.name);
      const fd = new FormData();
      fd.append("file", res.file);
      axios
        .post(`${process.env.NEXT_PUBLIC_URL}/image/upload`, fd, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
          setImageUrl(`${process.env.NEXT_PUBLIC_URL}${res.data.url}`);
        });
    });
  }

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
    geocoder.addressSearch(data.adress, function (result, status) {
      if (status === window.kakao.maps.services.Status.OK) {
        axios
          .post(`${process.env.NEXT_PUBLIC_URL}/write/regist`, {
            name: data.name,
            age: data.age,
            adress: data.adress,
            x: result[0].y,
            y: result[0].x,
            image: imageUrl,
            description: data.description,
          })
          .then(() => {
            dispatch(setModal(null));
            alert("등록되었습니다.");
          });
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
