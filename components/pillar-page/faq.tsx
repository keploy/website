import React from "react";
import Accordion from "../utils/accordion";
export interface Question {
  title: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
}

const FAQ: React.FC<FAQProps> = ({ questions }) => {
  return (
    <div className="max-w-6xl mx-auto px-8 pb-12">
    <h3 className=" text-center h2 px-10 text-secondary-300 mb-10">
          Frequently Asked Questions
          </h3>{questions.map((question, index) => (
        <div key={index} >
          <Accordion tag="div" title={question.title}>{question.answer}</Accordion>
        </div>
      ))}
    </div>
  );
};



export default FAQ;