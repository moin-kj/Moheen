import React from 'react'
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import OfferOveriew from './OfferOverview';
import ViewOfferProfile from './ViewOfferProfile';
import ViewCollaboration from './ViewCollaboration';
import ViewGuidelines from './ViewGuidelines';
import ViewTimeline from './ViewTimeline';
import ViewAssets from './ViewAssets';
import ViewAction from './ViewAction';
import ViewWork from './ViewWork';
import ViewStatus from './ViewStatus';

const ViewOffer = () => {

    return (
        <>

            <div className='grid grid-cols-3 border'>
                <OfferOveriew />
                <ViewOfferProfile />


            </div>
            <div className='grid grid-cols-1 border'>
                <ViewCollaboration />
                <ViewGuidelines />
                <ViewTimeline />
                <ViewAssets />
                <ViewAction />
                <ViewWork />
            </div>
            <ViewStatus />


        </>
    )
}

export default ViewOffer