import React, { useMemo } from 'react'
import { useStoreState } from '../redux/selector'
import locale from "../localisation/locale.json"
import icon from "../assets/Vector (2).png"
import img from "../assets/photo.png"

function Testim() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang])

    return (
        <div className='Testim'>
            <div className="edward-cart">
       <h1>{langData.testim}</h1>
                <div className="icon-cart">
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                    <img src={icon} alt="" />
                </div>

                <p>{langData.lacus}</p>

                <div className="circle-cart">
                    <h2>{langData.new}</h2>
                    <span>{langData.found}</span>
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}

export default Testim