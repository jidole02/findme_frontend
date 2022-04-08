import axios from "axios";
import { person } from "./../interfaces/person";

export const getNearMissingPerson = ({ x, y }: { x: number; y: number }) => {
  const res = axios.post(`${process.env.NEXT_PUBLIC_URL}/missing/near`, {
    x,
    y,
  });
  return res;
};

export const getImageUrl = ({ fd }: { fd: FormData }) => {
  const res = axios.post(`${process.env.NEXT_PUBLIC_URL}/image/upload`, fd, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return res;
};

export const addMissingPerson = ({
  name,
  age,
  adress,
  x,
  y,
  image,
  description,
}) => {
  axios.post(`${process.env.NEXT_PUBLIC_URL}/write/regist`, {
    name,
    age,
    adress,
    x,
    y,
    image,
    description,
  });
};

export const alertMissingPerson = ({ id, description }) => {
  axios.delete(
    `${process.env.NEXT_PUBLIC_URL}/write/alert?id=${id}&description=${description}`
  );
};

export const getPersonDetail = (id) => {
  const res = axios.get(process.env.NEXT_PUBLIC_URL + `/missing?id=${id}`);
  return res;
};
