import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const BillingTab = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div className='myInfo-tab'>
                <h3 className='mb-0 pb-3'>Billing & Payments</h3>
                
                <div className="border-[1px] rounded-xl p-6 mb-4 border-[#0055a2]">
                    <div className="flex justify-between items-center">
                        <p className='mb-0 text-xl font-[500]'>Billing methods</p>
                        <button onClick={handleShow} className='border-2 w-fit border-[#0057a2] hover:bg-[#0057a2] hover:text-white transition-all duration-500 ease-in-out text-[#0057a2] py-2 px-4 rounded-full font-bold'>
                            Add a billing method
                        </button>
                    </div>
                    <p className='text-lg pt-4'>You have not setup any billing methods yet. Add a method so you can hire when you are ready.</p>

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
                    <Modal.Header closeButton>
                        <Modal.Title>Re-enter password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        I will not close if you click outside me. Do not even try to press
                        escape key.
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

export default BillingTab;