import React from 'react'
import './Section4.css'

const Card = ({ icon, title, description }) => {
    return (
        <>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-5">
                <div className="service-item">
                    <div className="mb-2">
                        <span className="ic text-4xl">{icon}</span>
                    </div>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text font-normal">{description}</p>
                </div>
            </div>
        </>
    )
}

export default Card