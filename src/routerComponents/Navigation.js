import React from 'react';
import { NavLink } from 'react-router-dom';
// import LogOut from '../components/LogOut';

const Navigation = () => {
    return(
        <div>
            <NavLink to='/'>Resumen</NavLink>
            <NavLink to='/attendance'>Tomar asistencia</NavLink>
            <NavLink to='/lists'>Listas</NavLink>
            <NavLink to='/login'>Login</NavLink>

        </div>
    )
}

export default Navigation;