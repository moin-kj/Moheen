import React from 'react'
import { FaPencilAlt } from "react-icons/fa";
import { PiUserRectangleFill } from "react-icons/pi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const InfoTab = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='myInfo-tab'>
                <h3 className='mb-0'>My Info</h3>
                <p className='font-[500]'>This is a client account</p>
                <div className="border-[1px] rounded-xl p-6 mb-4 border-[#0055a2]">
                    <div className="flex justify-between items-center">
                        <p className='mb-0 text-xl font-[500]'>Account</p>
                        <button onClick={handleShow} className='border-2 border-[#0055a2] rounded-full h-10 w-10 flex items-center justify-center'>
                            <FaPencilAlt className='text-[#0055a2]' />
                        </button>
                    </div>

                    <div className="flex pt-6">
                        <PiUserRectangleFill className='text-6xl' />

                        <div className='pl-6 lg:pl-14'>
                            <p className='mb-0 text-lg font-[500]'>T***sain</p>
                            <p className='mb-0 text-base font-[500] text-gray-500'>Client</p>
                            <p className='mb-0 text-lg font-[500]'>Tayyab Hussain</p>
                            <div className="pt-3">
                                <p className='mb-0 text-base font-[500] text-gray-500'>Email</p>
                                <p className='mb-0 text-lg font-[500]'>h***1@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] rounded-xl p-6 mb-4 border-[#0055a2]">
                    <div className="flex justify-between items-center">
                        <p className='mb-0 text-xl font-[500]'>Company details</p>
                        <button onClick={handleShow} className='border-2 border-[#0055a2] rounded-full h-10 w-10 flex items-center justify-center'>
                            <FaPencilAlt className='text-[#0055a2]' />
                        </button>
                    </div>

                    <div className="flex pt-6">
                        <PiUserRectangleFill className='text-6xl' />
                        <div className='pl-6 lg:pl-14'>
                            <p className='mb-0 text-lg font-[500]'>Tayyab Hussain</p>
                        </div>
                    </div>
                </div>
                <div className="border-[1px] rounded-xl p-6 mb-4 border-[#0055a2]">
                    <div className="flex justify-between items-center">
                        <p className='mb-0 text-xl font-[500]'>Company contacts</p>
                        <button onClick={handleShow} className='border-2 border-[#0055a2] rounded-full h-10 w-10 flex items-center justify-center'>
                            <FaPencilAlt className='text-[#0055a2]' />
                        </button>
                    </div>

                    <div className=" pt-6">

                        <p className='mb-0 text-base font-[500] text-gray-500'>Owner</p>
                        <p className='mb-0 text-lg font-[500] pb-3'>T***sain</p>
                        <p className='mb-0 text-base font-[500] text-gray-500 pb-3'>Phone</p>
                        <div className="pt-3">
                            <p className='mb-0 text-base font-[500] text-gray-500'>VAT ID</p>
                            <p className='mb-0 text-lg font-[500]'><a href="#">Enter your VAT ID</a> to enable VAT invoicing</p>
                        </div>
                        <div className="pt-3">
                            <p className='mb-0 text-base font-[500] text-gray-500'>Time Zone</p>
                            <p className='mb-0 text-lg font-[500]'>UTC-08:00 Pacific Time (US & Canada); Tijuana</p>
                        </div>
                        <div className="pt-3">
                            <p className='mb-0 text-base font-[500] text-gray-500'>Address</p>
                            <p className='mb-0 text-lg font-[500]'>Pakistan</p>
                        </div>

                    </div>
                </div>

            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered

                >
                    <Modal.Header closeButton className='border-0'>
                        <Modal.Title>Re-enter password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-lg font-[500]">
                            <p>Emial</p>
                            <p className='font-[400]'>h...1@gmail.com</p>
                            <a href="#">Not You?</a>
                            <div className="flex flex-col pt-6">
                                <label htmlFor="password">Password</label>
                                <input className='form-control' type="password" />
                                <a href="#">Forgot password?</a>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer className='border-0'>
                        <button onClick={handleClose} className='text-[#0057a2] font-[500]'>
                            Cancel
                        </button>
                        <button className='border-2 w-fit border-[#0057a2] hover:bg-[#0057a2] hover:text-white transition-all duration-500 ease-in-out text-[#0057a2] py-2 px-4 rounded-full font-bold'>
                            Continue
                        </button>
                    </Modal.Footer>
                </Modal>
            </>
        </div>
    )
}

export default InfoTab;