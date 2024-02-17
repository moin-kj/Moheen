import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './BrandNavbarStyle.css'
import WebIcon from '@mui/icons-material/Web';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { FaQuestion } from "react-icons/fa6";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { SlSettings } from "react-icons/sl";
import Popover from '@mui/material/Popover';
import { TbLogout2 } from "react-icons/tb";
import Badge from '@mui/material/Badge';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

const BrandNavbar = () => {
    const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
    const [notificationToggle, setNotificationToggle] = useState(false);
    const [profileToggle, setProfileToggle] = useState(false);
    const NotificationData = [
        {
            id: 0,
            notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
        },
        {
            id: 1,
            notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
        },
        {
            id: 3,
            notificationTitle: "A recent sign-in to your Upwork account( 7dbb93e0) from an unkown device or browser. 9:22pm",
        },
    ]
    const Explore_Dropdown = [
        {
            id: 0,
            icon: <WebIcon className='text-[#008BFF] navicons' />,
            head: "Post a job",
            name: "postJob"
        },
        {
            id: 1,
            icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
            head: "All Jobs",
            name: "allJobs"
        },
        {
            id: 2,
            icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
            head: "All contracts",
            name: "allContracts"
        },
        {
            id: 3,
            icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
            head: "All offers",
            name: "allOffers"
        },
        {
            id: 3,
            icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
            head: "Collaborations",
            name: "collaborations"
        },

    ];

    return (
        <Navbar collapseOnSelect expand="lg" className='px-2 lg:px-5'>
            <Navbar.Brand >
                <Link to="/" className='text-black no-underline'>Your Logo</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto p-1 font-titleFont gap-4 items-center">
                    <div className='flex items-center text-3xl'>
                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div >
                                    <Link to="#" className='text-black no-underline ' {...bindTrigger(popupState)}>
                                        <Nav.Link href='#'> Jobs </Nav.Link>
                                    </Link>
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <div className="w-[300px] text-center flex flex-col gap-2 py-2 h-100 bottom-0 -right-6 top-[44px] z-[99999]">
                                            {Explore_Dropdown.map((val, index) => (
                                                <div key={index} className='hover:bg-[#eef8ff] px-2 py-1'>
                                                    <Link to="#" className='text-black no-underline '>
                                                        <Nav.Link href='#'>   {val.head} </Nav.Link>
                                                    </Link>

                                                </div>
                                            ))}
                                        </div>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>


                    </div>
                    <Link to="#" className='text-black no-underline '>
                        <Nav.Link href='#'> Find Influencer </Nav.Link>
                    </Link>
                    <Link to="#" className='text-black no-underline '>
                        <Nav.Link href='#'>Analytics</Nav.Link>
                    </Link>
                    <Link to="#" className='text-black no-underline '>
                        <Nav.Link href='#'>Messages</Nav.Link>
                    </Link>
                </Nav>
                <Nav className="p-1  font-titleFont gap-3">
                    <div className="flex items-center justify-center gap-4">
                        <div className='help-btn text-3xl cursor-pointer'>
                            <FaQuestion />
                        </div>
                        <div className='flex items-center text-4xl relative'>
                            <PopupState variant="popover" popupId="demo-popup-popover2">
                                {(popupState) => (
                                    <div>
                                        <Badge {...bindTrigger(popupState)} className='cursor-pointer' badgeContent={3} color="primary">
                                            <IoMdNotificationsOutline color="action" />
                                        </Badge>

                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <div className="md:w-[350px] relative h-100  z-[99999]">
                                                <div class="notification-triangle "></div>
                                                <div className="rounded-xl shadow-lg bg-white">
                                                    {NotificationData.map((val, index) => (
                                                        <div key={val.id} className="flex items-start border-b-2 p-6 hover:bg-[#eef8ff] cursor-pointer">
                                                            <p className='text-3xl mr-4'>
                                                                <FaRegUserCircle />
                                                            </p>
                                                            <p className='text-base mb-0' style={{ fontWeight: index === 0 ? 500 : 400 }}>{val.notificationTitle}</p>
                                                        </div>
                                                    ))}

                                                    <a href="#" className='no-underline'>
                                                        <p className='px-6 py-3 mb-0 text-black text-base hover:text-[#3f464c] hover:underline'>
                                                            See All Notification
                                                        </p>
                                                    </a>
                                                </div>
                                            </div>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>
                        </div>

                        <div className='flex items-center text-3xl'>

                            <PopupState variant="popover" popupId="demo-popup-popover">
                                {(popupState) => (
                                    <div>
                                        <CgProfile className='cursor-pointer' {...bindTrigger(popupState)} />
                                        <Popover
                                            {...bindPopover(popupState)}
                                            anchorOrigin={{
                                                vertical: 'bottom',
                                                horizontal: 'center',
                                            }}
                                            transformOrigin={{
                                                vertical: 'top',
                                                horizontal: 'right',
                                            }}
                                        >
                                            <div className="md:w-[300px] h-100 bottom-0 -right-6 top-[44px] z-[99999]">
                                                <div class="notification-triangle "></div>
                                                <div className="rounded-xl shadow-lg bg-white py-6">
                                                    <div className="userProfilepic flex justify-center">
                                                        <FaRegCircleUser className='text-6xl' />
                                                    </div>
                                                    <p className='text-lg text-center pt-2 mb-0'>Brand Name</p>
                                                    <p className='onlineTag text-center text-[14px]'>Online</p>
                                                    <a href="#" className='no-underline flex items-center text-black'>
                                                        <div className="flex items-center w-100 hover:bg-[#eef8ff] py-2 px-6 mb-0">

                                                            <SlSettings className='text-[20px]' />
                                                            <p className='mb-0 pl-6 text-[18px] no-underline'>Setting</p>

                                                        </div>
                                                    </a>
                                                    <a href="#" className='no-underline flex items-center text-black'>
                                                        <div className="flex items-center w-100 hover:bg-[#eef8ff] py-2 px-6 mb-0">

                                                            <TbLogout2 className='text-[20px]' />
                                                            <p className='mb-0 pl-6 text-[18px] no-underline'>Log out</p>

                                                        </div>
                                                    </a>

                                                </div>
                                            </div>
                                        </Popover>
                                    </div>
                                )}
                            </PopupState>


                        </div>
                    </div>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BrandNavbar;
