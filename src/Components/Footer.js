import './Footer.css';
import React, { useMemo } from 'react'
import { useStoreState } from "../redux/selector";
import locale from "../localization/locale.json";


function Footer (){
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);
    return (
        <footer>
            <div className="top">
                <div className="info">
                    <p>{langData.info}</p>
                    <p>{langData.copyright}</p>
                </div>
                <div className="destination">
                    <p>{langData.destination}</p>
                    <span>{langData.africa}</span>
                    <span>{langData.antarctica}</span>
                    <span>{langData.asia}</span>
                    <span>{langData.europe}</span>
                    <span>{langData.america}</span>
                </div>
                <div className="destination">
                    <p>{langData.title2}</p>
                    <span>{langData.guides}</span>
                    <span>{langData.gifts}</span>
                    <span>{langData.offers}</span>
                    <span>{langData.delivery}</span>
                    <span>{langData.faqs}</span>
                </div>
                <div className="destination">
                    <p>{langData.title3}</p>
                    <span>{langData.adventure}</span>
                    <span>{langData.art}</span>
                    <span>{langData.wildlife}</span>
                    <span>{langData.family}</span>
                    <span>{langData.food}</span>
                </div>
            </div>
            <div className="bottom">
                <button>{langData.button1}</button>
                <button>{langData.button2}</button>
                <button>{langData.button3}</button>
                <button>{langData.button4}</button>
                <button>{langData.button5}</button>
            </div>
        </footer>
    );
};


export default Footer;