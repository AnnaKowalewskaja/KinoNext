import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProfileContainer from '../Profile/ProfileContainer';
import NotesContainer from '../Notes/NotesContainer';
import FinderContainer from '../Finder/FinderContainer';

const RoutesMap = () => {
    const routes = [
        {
            element: <ProfileContainer />,
            path: '/profile',
            isExact: false
        },
        {
            element: <NotesContainer />,
            path: '/notes/',
            isExact: true
        },
        {
            element: <FinderContainer />,
            path: '/finder',
            isExact: false
        },
    ]
    return (
        <Routes>
            {routes.map((el) => {
                return <Route path={el.path} element={el.element} />
            })}
        </Routes>
    )
}

export default RoutesMap;