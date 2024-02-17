import React from 'react'
import Profile from './Profile'
import Subject from './Subject'
import Collaboration from './Collaboration'
import TimeLine from './TimeLine'
import Assets from './Assets'
import Action from './Action'
import Work from './Work'
import Last from './Last'
import Guidelines from './Guidelines'

const SendOffer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="container mt-3">
                    <div className='p-3'>
                        <h3 className='font-semibold font-serif'>Send an Offer</h3>
                    </div>
                    <div className='border rounded-xl'>

                        <Profile />
                        <Subject />
                        <Collaboration />
                        <Guidelines />
                        <TimeLine />
                        <Assets />
                        <Action />
                        <Work />
                        <Last />
                    </div>


                </div>
            </div>

        </>
    )
}

export default SendOffer