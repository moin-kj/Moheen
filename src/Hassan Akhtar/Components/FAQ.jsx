import React, { useState } from 'react';
import './FAQ.css'; // Import your CSS file

const FAQ = () => {
  const initialFAQs = [
    {
      id: 1,
      question: 'What is Partipost?',
      answer: 'Partipost is an influencer marketing platform that connects brand with everyday people and influencers by empowering them to share about the brands they love.',
      supportingText: '',
      break:'_______________________________________________________________',
    },
    {
      id: 2,
      question: 'What service can Partipost provide for my brand?',
      answer: 'You can install React by using npm or yarn. For example, `npm install react react-dom`.',
      supportingText: 'Visit the official React documentation for detailed installation instructions.',
      break:'_______________________________________________________________',
    }, 
    {
      id: 3,
      question: 'Can my brand create a campaign on partipost App',
      answer: 'You can install React by using npm or yarn. For example, `npm install react react-dom`.',
      supportingText: 'Visit the official React documentation for detailed installation instructions.',
      break:'_______________________________________________________________',
    },
    {
      id: 4,
      question: 'Can i find a large number of nano-influencers to promote my brand products withing the time limit?',
      answer: 'You can install React by using npm or yarn. For example, `npm install react react-dom`.',
      supportingText: 'Visit the official React documentation for detailed installation instructions.',
      break:'_______________________________________________________________',
    },
    {
      id: 5,
      question: 'Can i check the progress and actual results of brand activities by myself?',
      answer: 'You can install React by using npm or yarn. For example, `npm install react react-dom`.',
      supportingText: 'Visit the official React documentation for detailed installation instructions.',
      break:'_______________________________________________________________',
    },
    // Add more FAQ items as needed
  ];

  const [faqs, setFAQs] = useState(initialFAQs);

  const toggleAnswer = (id) => {
    setFAQs(
      faqs.map((faq) =>
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="text-center mb-4">
            <h2>Frequently Asked Questions</h2>
            <p>Before you jump in, there might be a few questions you need some answers for</p>
          </div>
        </div>
        <div className="col-md-6">
        <div className="faq-content">
        {faqs.map((faq) => (
          <div key={faq.id} className={`faq-item ${faq.isOpen ? 'open' : ''}`}>
            <div className="faq-header" onClick={() => toggleAnswer(faq.id)}>
              <h3 className="faq-question">{faq.question}</h3>
              <span className={`faq-arrow ${faq.isOpen ? 'open' : ''}`}>&#9660;</span>
            </div>
            {faq.isOpen && (
              <div className="faq-answer-content">
                <p className="faq-answer">{faq.answer}</p>
                <p className="faq-supporting-text">{faq.supportingText}</p>
              </div>
            )}
          </div>
        ))}
      </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;