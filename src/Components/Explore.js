import React, {useMemo} from 'react'
import { useStoreState } from '../redux/selector'
import locale from "../localization/locale.json"
import Balloon from "../assets/brain.png"


 function Explore() {

     const states = useStoreState();
     const langData = useMemo(() => locale[states.lang], [states.lang])

    return (
        <div className="explore">
            <img src={Balloon} alt="" />
            <div className='new way'>
                <h1>{langData.way}</h1>
                <p>{langData.Lonely}</p>
                <button className='btn'>{langData.button}</button>
            </div>
        </div>
    )
}

export default Explore