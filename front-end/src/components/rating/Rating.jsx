import React from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa';

export default function Rating({ rate }) {
    let starArr = [...Array(Math.floor(rate))];   
  return (
    <>
        <div>
            {
                starArr.map (
                    (_,i) => {
                        return (
                            <FaStar key={i} fill="yellow" stroke="black" strokeWidth="22"/>
                        )
                    }
                )
            }
            {
                rate - 0.5 === Math.floor(rate) ? 
                <FaStarHalf fill="yellow" stroke="black" strokeWidth="22"/> :<p/>
            }

        </div>
    </>
  )
}