import React, {useState} from 'react';
import { slide as HMenu } from 'react-burger-menu';
import "../App.css";
import {Link} from "react-router-dom";

function MyCustomIcon({ isOpen, setIsOpen }) {
    const rotation = isOpen ? 90 : 0;

    return <img src={"./menu.png"} style={{transform: `rotate(${rotation}deg)`, transition: 'transform 0.2s ease-in-out'}} onClick={() => setIsOpen(!isOpen)} className={"img-btn"} />
}

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <HMenu customCrossIcon={false} isOpen={isOpen} onStateChange={({isOpen})=> setIsOpen(isOpen)} customBurgerIcon={<MyCustomIcon isOpen={isOpen} setIsOpen={setIsOpen}/>}>
            <Link className="bm-item amiri midtext mt-3 mt-md-4 pt-4 mx-1 mx-sm-2" href="/">
                Home
            </Link>
            <Link className="bm-item amiri midtext mx-1 mx-sm-2" to="/searchplanet">
                Planets
            </Link>
            <Link className="bm-item amiri midtext mx-1 mx-sm-2" to="about">
                About
            </Link>
        </HMenu>
    );
}

export default Menu;






