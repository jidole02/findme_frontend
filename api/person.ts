import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL;

export const getNearMissingPerson = ({ x, y }: { x: number; y: number }) => {
  const res = axios.post(`${url}/missing/near`, {
    x,
    y,
  });
  return res;
};

export const getImageUrl = ({ fd }: { fd: FormData }) => {
  const res = axios.post(`${url}/image/upload`, fd, {
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
  axios.post(`${url}/write/regist`, {
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
  axios.delete(`${url}/write/alert?id=${id}&description=${description}`);
};

export const getPersonDetail = (id) => {
  const res = axios.get(url + `/missing?id=${id}`);
  return res;
};

export const getPersonSearchResult = (keyword) => {
  const res = axios.get(url + `/missing/search?keyword=${keyword}`);
  return res;
};
