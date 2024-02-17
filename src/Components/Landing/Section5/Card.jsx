import React from 'react'

const Card = ({ icon, title, description }) => (
    <div className="col-lg-5 col-md-6 col-sm-12 mb-4 mt-3">
        <div className="">
            <div className="">
                <div className="mb-2">
                    <span className="text-4xl">{icon}</span>
                </div>
                <h5 className="card-title text-white font-bold py-3 text-2xl ">{title}</h5>
                <p className="card-text text-white  font-semibold py-2 text-justify">{description}</p>
            </div>
        </div>
    </div>
);

export default Card