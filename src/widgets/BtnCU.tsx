import { NavLink } from 'react-router-dom';
import cl from '../pages/Main.module.css';

export default function BtnCU(): JSX.Element {
    return (
        <NavLink className={cl.linckContactUs} to="/ContactUs">Contact us</NavLink>
    );
}
