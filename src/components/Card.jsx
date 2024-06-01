import React from "react"

export default function Card(props)
{
    let badgeText
            if(props.openSpots===0)
            {
                badgeText="SOLD OUT"
            }else if(props.location==="Online")
            {
                badgeText="ONLINE"
            }
    return(
        <div className="card">

            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} className="card--image" alt="Image"/>
            <div className="card--stats">
                <img src="images/star.png" className="card--star" alt="start icon"/>
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <h2>{props.title}</h2>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )

}