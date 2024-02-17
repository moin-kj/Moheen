import React from 'react';
import Profile from './Profile';

const ProfileCard = () => {
    const profiles = [
        {
            id: 0,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "2.5k",
            success: "100%"
        },
        {
            id: 1,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "2.5k",
            success: "100%"
        },
        {
            id: 2,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "2.5k",
            success: "100%"
        },
        {
            id: 3,
            Name: "Hamza",
            img: "https://source.unsplash.com/600x300/?student",
            expert: ["Fashion", "Beauty", "Travel"],
            city: "Karachi",
            rate: "2.5k",
            success: "100%"
        },
    ]


    return (
        <>
            <div className="py-1">
                <div className="border-l-4">
                    {
                        profiles.map((val, key) => {
                            return <Profile
                                id={key}
                                key={key}
                                Name={val.Name}
                                img={val.img}
                                expert={val.expert}
                                city={val.city}
                                rate={val.rate}
                                success={val.success}

                            />
                        })
                    }

                </div>
            </div>






        </>

    );
};

export default ProfileCard;
