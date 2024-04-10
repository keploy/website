import React from "react";
import Accordion from "./utils/accordion";
export interface Question {
  title: string;
  answer: string;
}

interface FAQProps {
  questions: Question[];
  answerTag:string
}

const FAQ: React.FC<FAQProps> = ({ questions,answerTag }) => {
  return (
    <>
      {questions.map((question, index) => (
        <div key={index}>
          <Accordion tag={answerTag} title={question.title}>{question.answer}</Accordion>
        </div>
      ))}
    </>
  );
};



export default FAQ;