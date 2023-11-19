import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfileContainer from "../Profile/ProfileContainer";
import NotesContainer from "../Notes/NotesContainer";
import FinderContainer from "../Finder/FinderContainer";

const RoutesMap = () => {
  const routes = [
    {
      element: <ProfileContainer />,
      path: "/profile",
      isExact: false,
      id: 1,
    },
    {
      element: <NotesContainer />,
      path: "/notes/",
      isExact: true,
      id: 2,
    },
    {
      element: <FinderContainer />,
      path: "/finder",
      isExact: false,
      id: 3,
    },
  ];
  return (
    <Routes>
      {routes.map((el) => {
        return <Route path={el.path} element={el.element} key={el.id} />;
      })}
    </Routes>
  );
};

export default RoutesMap;
