import React, { useMemo } from 'react'
import logo from "../assets/logo.png"
import { useStoreState } from '../redux/selector'
import locale from "../localization/locale.json"
import { useDispatch } from "react-redux";
import { setLang } from "../redux/lang";

function Navbar() {
  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang]);
  const dispatch = useDispatch();


  return (
    <div className='Navbar'>
      <img src={logo} alt="" />

      <div className="cart">
        <span>{langData.home}</span>
        <span>{langData.destination}</span>
        <span>{langData.about}</span>
        <span>{langData.partner}</span>
        <button>{langData.login}</button>
        <button>{langData.register}</button>
        <select name="" id="" onChange={(e) => dispatch(setLang(e.target.value))}>
          <option value="uz">UZ</option>
          <option value="en">EN</option>
        </select>

      </div>
    </div>
  )
}

export default Navbar
