import React from 'react'
import mask from "../assets/Fanjingshan.png";
import vavey from "../assets/Vevey.png";
import fan from "../assets/Fanjingshan.png";
import skadar from "../assets/Skadar.png";

 function Corusel() {
    return (
        <div className='wrapper'>
            <div className="add">
                <h1>Featured destinations</h1>
                <button>View all </button>
            </div>
            <div className="corusel">
                <img src={mask} alt="" />
                <img src={fan} alt="" />
                <img src={vavey} alt="" />
                <img src={skadar} alt="" />
            </div>
        </div>
    )
}

export default Corusel