import MainPage from '../pages/MainPage';
import { NavLink, Route, Routes } from 'react-router-dom';
import ContactUs from '../pages/ContactUs';
import cl from "../Menu.module.css";
import BtnCU from './BtnCU';
import Manager from '../pages/Manager';

export default function Menu(): JSX.Element {
    return (
        <>
            <nav className={cl.header}>
                <NavLink className={cl.nameCompany} to="/"><h1>Some Company</h1></NavLink>
                {/* <NavLink className={cl.nameCompany} to="/Manager"><h1>Some Company</h1></NavLink> */}
                <BtnCU />
            </nav>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path="Manager" element={<Manager />} />
            </Routes>
        </>
    );
}
