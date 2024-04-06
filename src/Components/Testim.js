import React, { useMemo } from 'react'
import { useStoreState } from '../redux/selector'
import locale from "../localization/locale.json"
import Frame from "../assets/Vector (2).png"
import First from "../assets/photo.png"

function Testim() {
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang])

    return (
        <div className='Testimonials'>

            <div className="full-cart">
            <h1>{langData.test}</h1>
            <div className="icon-cart">
            <div className="imgs">
                <img src={Frame} alt="" />
                <img src={Frame} alt="" />
                <img src={Frame} alt="" />
                <img src={Frame} alt="" />
                <img src={Frame} alt="" />
            </div>
            <p>{langData.up}</p>
            </div> 
           <div className="cartt">
            <h2>{langData.never}</h2>
            <h5>{langData.forget}</h5>
            </div>
            </div>
                <img src={First} alt="" />
        </div>
    )
}

export default Testim