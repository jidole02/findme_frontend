import { person } from "./../../interfaces/person";
import { DistanceArr } from "./distanceArr";
import { UnderTabViewProps } from "./type";
import { useState } from "react";
import UnderTabView from "./view";

interface Props {
  data: person[];
}

const UnderTab = ({ data }: Props) => {
  const [selectDistance, setSelectDistance] = useState(DistanceArr[0].distance);

  const props: UnderTabViewProps = {
    selectDistance,
    setSelectDistance,
    data,
  };

  return <UnderTabView {...props} />;
};

export default UnderTab;
