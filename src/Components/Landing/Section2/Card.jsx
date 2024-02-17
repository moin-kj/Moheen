import React from 'react'
import "./Section2.css"
const Card = ({ icon, title, description }) => (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4 mt-5">
        <div className="card rounded-lg shadow">
            <div className="card-body">
                <div className="mb-2">
                    <span className="text-4xl text-primary">{icon}</span>
                </div>
                <h5 className="card-title text-black">{title}</h5>
                <p className="card-text text-light-gray">{description}</p>
            </div>
        </div>
    </div>
);

export default Card