import React from 'react';
import { useData } from '../ShortlistContext';

const Shortlist = () => {
    const { data } = useData();




    


    // const [accept, setaccept] = useState(Array(shortlistdata.length).fill(false));

    // const handleAcceptClick = (index) => {
    //     const updatedaccept = [...accept];
    //     updatedaccept[index] = !updatedaccept[index];
    //     setaccept(updatedaccept);
    // };



    return (
        <>

            {
                data.shortlistedProposals.map((val, index) => {
                    return <div key={index} className="border-b-2 p-4 cursor-pointer hover:bg-gray-200 hover:rounded-2xl">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="grid grid-cols-5">
                                <div className="">
                                    <div className="relative w-28 h-28">
                                        <img
                                            className="w-28 h-28 rounded-full"
                                            src="https://source.unsplash.com/600x300/?student"
                                            alt="Profile"
                                        />
                                        {/* Online/Offline Dot */}
                                        <div className="absolute bottom-1 right-2 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                                    </div>
                                </div>
                                <div className="col-span-3 mx-2 my-auto">
                                    <h6 className="text-lg font-semibold text-gray-600 mb-1">{val.Name}</h6>
                                    <p className="text-xl font-semibold text-gray-900 mb-1">
                                        {val.expert.join(" | ")}
                                    </p>
                                    <h6 className="text-lg font-semibold text-gray-600 mb-1">{val.city}</h6>
                                </div>
                            </div>
                            {/* Right side */}
                            <div className="grid grid-cols-1">
                                <div className="flex justify-end my-auto">
                                    <div className="">
                                        <button className="bg-blue-500 mx-3 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full">
                                            Message
                                        </button>
                                        {/* <button
                                            className={`bg-${accept[index] ? 'red' : 'green'}-500 hover:bg-${accept[index] ? 'red' : 'green'}-700 text-white font-semibold py-2 px-6 rounded-full`}
                                            onClick={() => handleAcceptClick(index)}
                                        >
                                            {accept[index] ? 'Reject' : 'Accept'}
                                        </button> */}
                                        <button
                                            className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full" 
                                            onClick={() => handleAcceptClick(index)}

                                        >
                                        Accept
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Second row for Price and Description */}
                        <div className="grid grid-cols-1 ">
                            <div className='ps-32 pt-1'>
                                <h6 className="text-xl font-semibold text-gray-700 mb-1">$100</h6>
                                <p className="text-lg font-semibold text-gray-600 text-justify mb-1 pt-1 overflow-hidden overflow-ellipsis whitespace-nowrap" >
                                    {val.descr}
                                </p>
                            </div>

                        </div>
                    </div>
                })
            }

        </>


    );
}

export default Shortlist;
