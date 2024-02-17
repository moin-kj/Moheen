import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container, Row, Col, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
import WebIcon from '@mui/icons-material/Web';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import InterestsRoundedIcon from '@mui/icons-material/InterestsRounded';
import { GiRunningShoe } from "react-icons/gi";
import { IoCarSport } from "react-icons/io5";
import { GiLipstick } from "react-icons/gi";
import { IoBusinessSharp } from "react-icons/io5";
import { IoGameController } from "react-icons/io5";
import { FaHandHoldingUsd } from "react-icons/fa";
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import FastfoodRoundedIcon from '@mui/icons-material/FastfoodRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import { FaGuitar } from "react-icons/fa6";
import LandscapeRoundedIcon from '@mui/icons-material/LandscapeRounded';
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import { MdOutlinePets } from "react-icons/md";
import SportsTennisRoundedIcon from '@mui/icons-material/SportsTennisRounded';
import DevicesOtherRoundedIcon from '@mui/icons-material/DevicesOtherRounded';
import FlightTakeoffRoundedIcon from '@mui/icons-material/FlightTakeoffRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import { IoIosPaper } from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { MdBrandingWatermark } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const NavigationBar = () => {
    const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
    const [categoriesDropdownOpen, setCategoriesDropdownOpen] = useState(false);
    const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);


    const Explore_Dropdown = [
        {
            id: 0,
            icon: <WebIcon className='text-[#008BFF] navicons' />,
            head: "BrandFluence platform",
            name: "platform"
        },
        {
            id: 1,
            icon: <HandshakeOutlinedIcon className='navicons text-[#EC6E47]' />,
            head: "Strategy & Management",
            name: "strategy"
        },
    ];

    const Categories_Dropdown = [
        {
            id: 0,
            icon: <InterestsRoundedIcon className='text-[#008BFF] navicons' />,
            head: "Art & Creativity",
            name: "art"
        },
        {
            id: 1,
            icon: <IoCarSport className='navicons text-[#EC6E47]' />,
            head: "Automotive & Vehicles",
            name: "vehicle"
        },
        {
            id: 2,
            icon: <GiLipstick className='navicons text-[#EC6E47]' />,
            head: "Beauty & SkinCare",
            name: "beauty"
        },
        {
            id: 3,
            icon: <IoBusinessSharp className='navicons text-[#EC6E47]' />,
            head: "Business & Entrepreneurship",
            name: "business"
        },
        {
            id: 4,
            icon: <IoGameController className='navicons text-[#EC6E47]' />,
            head: "Entertainment & Gaming",
            name: "gaming"
        },
        {
            id: 5,
            icon: <GiRunningShoe className='navicons text-[#EC6E47]' />,
            head: "Fashion & Apparel",
            name: "fashion"
        },
        {
            id: 6,
            icon: <FaHandHoldingUsd className='navicons text-[#EC6E47]' />,
            head: "Financial Advice & Services",
            name: "finance"
        },
        {
            id: 8,
            icon: <FitnessCenterRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Fitness & Wellness",
            name: "fitness"
        },
        {
            id: 9,
            icon: <FastfoodRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Food & Cooking",
            name: "food"
        },
        {
            id: 10,
            icon: <HomeRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Home Decor & Interior Design",
            name: "decor"
        },
        {
            id: 11,
            icon: <DiamondRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Luxury & Lifestyle",
            name: "luxury"
        },
        {
            id: 12,
            icon: <FaGuitar className='navicons text-[#EC6E47]' />,
            head: "Music & Entertainment",
            name: "music"
        },
        {
            id: 13,
            icon: <LandscapeRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Outdoor Adventures",
            name: "adventure"
        },
        {
            id: 14,
            icon: <Diversity1RoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Parenting & Family Lifestyle",
            name: "parenting"
        },
        {
            id: 15,
            icon: <MdOutlinePets className='navicons text-[#EC6E47]' />,
            head: "Pet Care & Products",
            name: "pet"
        },
        {
            id: 17,
            icon: <SportsTennisRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Sports & Fitness Gear",
            name: "sports"
        },
        {
            id: 18,
            icon: <DevicesOtherRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Tech & Gadgets",
            name: "tech"

        },
        {
            id: 19,
            icon: <FlightTakeoffRoundedIcon className='navicons text-[#EC6E47]' />,
            head: "Travel & Exploration",
            name: "travel"

        },
    ];


    const Resource_Dropdown = [
        {
            id: 0,
            icon: <ArticleRoundedIcon className='text-[#008BFF] navicons' />,
            head: "Article",
            name: "article"


        },
        {
            id: 1,
            icon: <IoIosPaper className='text-[#008BFF] navicons' />,
            head: "Blogs",
            name: "blogs"


        },
        {
            id: 2,
            icon: <MdBrandingWatermark className='text-[#008BFF] navicons' />,
            head: "Brand Stories",
            name: "stories"


        },
        {
            id: 3,
            icon: <FaHandsHelping className='text-[#008BFF] navicons' />,
            head: "Platform Guides",
            name: "guides"


        }
    ]

    return (
        <Navbar collapseOnSelect expand="lg" className='px-5'>
            <Navbar.Brand >
                <Link to="/" className='text-black no-underline '>Your Logo</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto p-1 font-titleFont gap-4">
                    <NavDropdown
                        title={
                            <div className="flex items-center">
                                Explore <span className="ml-1 mt-1">{exploreDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                            </div>
                        }
                        id="collasible-nav-dropdown"
                        onMouseEnter={() => {
                            setExploreDropdownOpen(true)
                            setCategoriesDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                        }}
                        show={exploreDropdownOpen}
                    >
                        <Container fluid className="eventsNav bg-[aliceblue] border-black border-b-[1px] px-5"
                            onMouseLeave={() => setExploreDropdownOpen(false)}>
                            <Row >
                                {
                                    Explore_Dropdown.map((val, index) => {
                                        return <Col md="4" lg="3" className="text-left pt-4" key={index}>
                                            <Dropdown.Item>
                                                <Link to={'/' + val.name} className='text-black font-thin no-underline flex items-center'>
                                                    <div>
                                                        {val.icon}
                                                    </div>
                                                    <div>
                                                        <h6 className="font-sans mt-2">
                                                            {val.head}
                                                        </h6>
                                                    </div>
                                                </Link>
                                            </Dropdown.Item>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title={
                            <div className="flex items-center">
                                Categories <span className="ml-1 mt-1">{categoriesDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                            </div>
                        }
                        id="collasible-nav-dropdown"
                        onMouseEnter={() => {
                            setCategoriesDropdownOpen(true)
                            setExploreDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                        }}
                        show={categoriesDropdownOpen}
                    >
                        <Container fluid className="eventsNav1 bg-[aliceblue] border-black border-b-[1px] px-5"
                            onMouseLeave={() => setCategoriesDropdownOpen(false)}
                        >
                            <Row >
                                {
                                    Categories_Dropdown.map((val, index) => {
                                        return <Col md="4" lg="3" className="text-left mt-5" key={index}>
                                            <Dropdown.Item>
                                                <Link to={'/' + val.name} className='text-black font-thin no-underline flex items-center'>
                                                    <div>
                                                        {val.icon}
                                                    </div>
                                                    <div>
                                                        <h6 className="font-sans mt-2">
                                                            {val.head}
                                                        </h6>
                                                    </div>
                                                </Link>
                                            </Dropdown.Item>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>
                    </NavDropdown>
                    <NavDropdown
                        title={
                            <div className="flex items-center">
                                Resources & Guides <span className="ml-1 mt-1">{resourcesDropdownOpen ? <FaAngleUp /> : <FaAngleDown />}</span>
                            </div>
                        }
                        id="collasible-nav-dropdown"
                        onMouseEnter={() => {
                            setResourcesDropdownOpen(true)
                            setCategoriesDropdownOpen(false);
                            setExploreDropdownOpen(false);

                        }
                        }
                        show={resourcesDropdownOpen}
                    >
                        <Container fluid className="eventsNav2 bg-[aliceblue] border-black border-b-[1px] px-5"
                            onMouseLeave={() => setResourcesDropdownOpen(false)}
                        >
                            <Row >
                                {
                                    Resource_Dropdown.map((val, index) => {
                                        return <Col md="4" lg="6" className="text-left mt-3" key={index}>
                                            <Dropdown.Item>
                                                <Link to={'/' + val.name} className='text-black font-thin no-underline flex items-center'>
                                                    <div>
                                                        {val.icon}
                                                    </div>
                                                    <div>
                                                        <h6 className="font-sans mt-2">
                                                            {val.head}
                                                        </h6>
                                                    </div>
                                                </Link>
                                            </Dropdown.Item>
                                        </Col>
                                    })
                                }
                            </Row>
                        </Container>
                    </NavDropdown>
                    <Link to="/influencer" className='text-black no-underline '>
                        <Nav.Link href='/influencer'>Influencers</Nav.Link>
                    </Link>
                    <Link to="/brand" className='text-black no-underline '>
                        <Nav.Link href='/brand'>Brands</Nav.Link>
                    </Link>
                    <Link to="/about" className='text-black no-underline '>
                        <Nav.Link href='/about'>About</Nav.Link>
                    </Link>
                </Nav>
                <Nav className="p-1  font-titleFont">
                    <Link to="/login" className='text-black no-underline '>
                        <Nav.Link href='/login'>Login</Nav.Link>
                    </Link>
                    <Link to="/signup" className='text-white no-underline border bg-buttoncolor hover:bg-buttonhovercolor rounded-full px-3 '>
                        <Nav.Link className='text-white' href='/signup'>Sign Up</Nav.Link>
                    </Link>
                    {/* <button className="bg-blue-700 hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded-full w-full">
                        Create my Account
                    </button> */}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
