import React, { useState } from 'react';
import ScrollTop from '../../ScrollTop/ScrollTop';

const Step4 = () => {
    const [imageCards, setImageCards] = useState([
        { id: 1, image: null, errorMessage: '' },
        { id: 2, image: null, errorMessage: '' },
        { id: 3, image: null, errorMessage: '' },
        { id: 4, image: null, errorMessage: '' }
    ]);

    const [videoCards, setVideoCards] = useState([
        { id: 1, video: null, errorMessage: '' },
        { id: 2, video: null, errorMessage: '' }
    ]);

    const [documentCards, setDocumentCards] = useState([
        { id: 1, document: null, errorMessage: '' },
        { id: 2, document: null, errorMessage: '' }
    ]);

    const handleImageChange = (e, imagecardIndex) => {
        const selectedImage = e.target.files[0];
        if (selectedImage.size > 2 * 1024 * 1024) {
            setImageCards(prevImageCards => {
                const updatedImageCards = [...prevImageCards];
                updatedImageCards[imagecardIndex].errorMessage = 'Size greater than 2 Mb.';
                return updatedImageCards;
            });
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                setImageCards(prevImageCards => {
                    const updatedImageCards = [...prevImageCards];
                    updatedImageCards[imagecardIndex].errorMessage = '';
                    updatedImageCards[imagecardIndex].image = reader.result;
                    return updatedImageCards;
                });
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    const handleVideoChange = (e, videoCardIndex) => {
        const selectedVideo = e.target.files[0];
        if (selectedVideo.size > 50 * 1024 * 1024) {
            setVideoCards(prevVideoCards => {
                const updatedVideoCards = [...prevVideoCards];
                updatedVideoCards[videoCardIndex].errorMessage = 'Size should be less than 50 MB.';
                return updatedVideoCards;
            });
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                setVideoCards(prevVideoCards => {
                    const updatedVideoCards = [...prevVideoCards];
                    updatedVideoCards[videoCardIndex].errorMessage = '';
                    updatedVideoCards[videoCardIndex].video = reader.result;
                    return updatedVideoCards;
                });
            };
            reader.readAsDataURL(selectedVideo);
        }
    };


    const handleDocumentChange = (e, documentCardIndex) => {
        const selectedDocument = e.target.files[0];

        if (selectedDocument.type !== 'application/pdf') {
            setDocumentCards(prevCards => {
                const updatedDocumentCards = [...prevCards];
                updatedDocumentCards[documentCardIndex].errorMessage = 'Only PDFs are allowed.';
                return updatedDocumentCards;
            });
        } else if (selectedDocument.size > 10 * 1024 * 1024) {
            setDocumentCards(prevCards => {
                const updatedDocumentCards = [...prevCards];
                updatedDocumentCards[documentCardIndex].errorMessage = 'Size should be less than 10 MB.';
                return updatedDocumentCards;
            });
        } else {
            const reader = new FileReader();
            reader.onload = () => {
                setDocumentCards(prevCards => {
                    const updatedDocumentCards = [...prevCards];
                    updatedDocumentCards[documentCardIndex].errorMessage = '';
                    updatedDocumentCards[documentCardIndex].document = selectedDocument;
                    updatedDocumentCards[documentCardIndex].documentName = selectedDocument.name;
                    return updatedDocumentCards;
                });
            };
            reader.readAsDataURL(selectedDocument);
        }
    };



    return (
        <>
            <ScrollTop />
            <div className="container  mt-5 mx-auto px-4 py-8 rounded-lg  ">
                <div className="border bg-white mx-12 p-4 rounded-xl">
                    {/* Images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Images</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Get noticed by the <b>right influencers</b> with visual examples of your job. <b>Upload images</b> (smaller than 2MB) that showcase your offerings</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-4 gap-4 mt-3'>
                                {imageCards.map((card, index) => (
                                    <div key={card.id} className="border border-gray-300 rounded-lg p-2 h-34 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                                        {card.image ? (
                                            <img src={card.image} alt="Selected" className="w-full h-full object-cover" />
                                        ) : (
                                            <>
                                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4zGCi3zopn2o_TNs3JU18b7GjJKEE_ZvW15Vwfjv4sXFIVQROwOAixqUtkwICmNhShbc&usqp=CAU" className='img-fluid w-2/3' alt="" />
                                                <span className="text-gray-400">Add image</span>
                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    onChange={(e) => handleImageChange(e, index)}
                                                    className="hidden"
                                                    id={`imageFileInput_${card.id}`}
                                                />
                                                <label htmlFor={`imageFileInput_${card.id}`} className="text-blue-500 cursor-pointer">Browse</label>
                                            </>
                                        )}
                                        {card.errorMessage && (
                                            <div className="text-red-500 text-sm mt-2">{card.errorMessage}</div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Videos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Videos</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Capture <b>influencer's attention</b> with a video (smaller than 50MB) that showcases your job.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-2 gap-4 mt-3'>
                                {videoCards.map((card, index) => (
                                    <div key={card.id} className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                                        {card.video ? (
                                            <video src={card.video} className="w-full h-full" controls />
                                        ) : (
                                            <>
                                                <img src="https://www.pngfind.com/pngs/m/47-470250_images-for-video-player-icon-transparent-background-video.png" className='img-fluid w-2/12 mb-2' alt="" />
                                                <span className="text-gray-400">Upload Video</span>
                                                <input
                                                    type="file"
                                                    accept="video/*"
                                                    onChange={(e) => handleVideoChange(e, index)}
                                                    className="hidden"
                                                    id={`videoFileInput_${card.id}`}
                                                />
                                                <label htmlFor={`videoFileInput_${card.id}`} className="text-blue-500 cursor-pointer">Browse</label>
                                            </>
                                        )}
                                        {card.errorMessage && (
                                            <div className="text-red-500 text-sm mt-2">{card.errorMessage}</div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                    {/* Documents */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="md:col-span-1 my-auto">
                            <div>
                                <label htmlFor="title" className="block text-xl font-semibold text-gray-700">Documents</label>
                                <p className="text-gray-500 text-sm text-justify mt-2 w-3/4">Provide <b>guidelines or instructions</b>  in a document (PDFs only) to help influencers understand your requirements & expectations.</p>
                            </div>
                        </div>
                        <div className="md:col-span-2">
                            <div className='grid grid-cols-2 gap-4 mt-3'>
                                {documentCards.map((card, index) => (
                                    <div key={card.id} className="border border-gray-300 rounded-lg p-2 h-40 flex flex-col items-center justify-center mb-3 cursor-pointer relative">
                                        {card.document ? (
                                            <a href={URL.createObjectURL(card.document)} target="_blank" rel="noopener noreferrer">{card.documentName}</a>
                                        ) : (
                                            <>
                                                <img src="https://icones.pro/wp-content/uploads/2021/06/icone-fichier-document-gris.png" className='img-fluid w-2/12 mb-2' alt="" />
                                                <span className="text-gray-400">Attach Document</span>
                                                <input
                                                    type="file"
                                                    accept="application/pdf"
                                                    onChange={(e) => handleDocumentChange(e, index)}
                                                    className="hidden"
                                                    id={`documentFileInput_${card.id}`}
                                                />
                                                <label htmlFor={`documentFileInput_${card.id}`} className="text-blue-500 cursor-pointer">Browse</label>
                                            </>
                                        )}
                                        {card.errorMessage && (
                                            <div className="text-red-500 text-sm mt-2">{card.errorMessage}</div>
                                        )}
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Step4;
