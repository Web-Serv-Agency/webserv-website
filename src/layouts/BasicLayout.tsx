import NavBar from "@/components/navbar";
import { NextPage } from "next";

type IProps = {
  children: NextPage;
};

const BasicLayout = ({ children }: IProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default BasicLayout;
