import React, { useMemo } from 'react'
import "./Section.css"
import rightimg from "../assets/thousand-01 1.png"
import { useStoreState } from "../redux/selector";
import locale from "../localization/locale.json";

function Section() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);

    return (
        <div className='Section'>
            <div className="left-cart">
                <h1>{langData.st}</h1>
                <span>{langData.holiday}</span>

                <div className="selects">
                    <select name="location" id="location">
                        <option value="" disabled selected hidden>{langData.location}</option>
                        <option value="" >location 1</option>
                        <option value="" >location 2</option>
                    </select>
                    <select name="date" id="date">
                        <option value="" disabled selected hidden>{langData.activity}</option>
                        <option value="" >Activity 1</option>
                        <option value="" >Activity 2</option>
                    </select>
                    <select name="grade" id="grade">
                        <option value="" disabled selected hidden>{langData.grade}</option>
                        <option value="" >Grade 1</option>
                        <option value="" >Grade 1</option>
                    </select>
                    <select name="Date" id="Date">
                        <option value="" disabled selected hidden>{langData.date}</option>
                        <option value="" >Date 1</option>
                        <option value="" >Date 1</option>
                    </select>
                </div>
                <button className='btn'>{langData.explore}</button>
            </div>


            <div className="right-cart">
                <img src={rightimg} alt="" />
            </div>

        </div>
    )
}

export default Section