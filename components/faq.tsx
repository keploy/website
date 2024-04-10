import React from "react";
import Accordion from "./utils/accordion";
export interface Question {
  title: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
}

const FAQ: React.FC<FAQProps> = ({ questions }) => {
  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <Accordion title={question.title}>{question.answer}</Accordion>
        </div>
      ))}
    </>
  );
};



export default FAQ;