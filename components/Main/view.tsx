import { Fragment } from "react";
import { MainViewProps } from "./type";
import Header from "../Header";
import UnderTab from "../UnderTab";

const MainView = ({ map, data }: MainViewProps) => {
  return (
    <Fragment>
      <Header map={map} />
      <UnderTab data={data} />
      <div id="map" style={{ height: "100vh", width: "100vw" }} />
    </Fragment>
  );
};

export default MainView;
