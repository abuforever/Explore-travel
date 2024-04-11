import React , {useMemo} from 'react'
import BTC from "../assets/BTC.png"
import { useStoreState } from '../redux/selector'
import locale from "../localization/locale.json"

function Ultimate() {
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang])

    return (
        <div className='ultimate'>
            <div className="trip">
                <h1>{langData.thousand}</h1>
                <p>{langData.Ultimate}</p>
                <button className='btn'>{langData.Button}</button>
            </div>
            <img src={BTC} alt="" />
        </div>
    )
}

export default Ultimate