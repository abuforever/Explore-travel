import React, { useMemo } from 'react'
import { useStoreState } from '../redux/selector'
import locale from "../localization/locale.json"
import img1 from "../assets/image 12.png"
import img2 from "../assets/image 13.png"
import img3 from "../assets/image 14.png"
import img4 from "../assets/image 15.png"

function Trending() {
  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang])
  return (
    <div className='Trending'>
      <h1>{langData.trend}</h1>

      <div className="img-carts">
        <div className="img-cart">
          <img src={img1} alt="" />
          <h5>{langData.rest}</h5>
          <p>{langData.healing}</p>
          <button>{langData.read}</button>
        </div>

        <div className="img-cart">
          <img src={img2} alt="" />
          <h5>{langData.rest}</h5>
          <p>{langData.healing}</p>
          <button>{langData.read}</button>
        </div>

        <div className="img-cart">
          <img src={img3} alt="" />
          <h5>{langData.rest}</h5>
          <p>{langData.healing}</p>
          <button>{langData.read}</button>
        </div>

        <div className="img-cart">
          <img src={img4} alt="" />
          <h5>{langData.rest}</h5>
          <p>{langData.healing}</p>
          <button>{langData.read}</button>
        </div>
      </div>
    </div>
  )
}

export default Trending
