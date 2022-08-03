import React, { useEffect } from "react";
import LeftSideBar from "../modules/main/LeftSideBar";
import RightSideBar from "../modules/main/RightSideBar";
import { useGetIdentity } from "@pankod/refine-core";
interface Props {
  children?: React.ReactNode;
}
const MainLayout: React.FC<Props> = ({ children }) => {
  const { data: userIdentity } = useGetIdentity<string>();
  if (userIdentity) {
    return (
      <>
        <LeftSideBar></LeftSideBar>
        <div className="page-student-container pl-[320px] p-10">{children}</div>
        <RightSideBar></RightSideBar>
      </>
    );
  } else return <> {children}</>;
};

export default MainLayout;
