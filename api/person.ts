import axios from "axios";

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
