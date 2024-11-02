interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = ({ question, answer }: FAQItem) => {
  return (
    <div className="w-full p-4  max-w-md mx-auto my-3">
      <div className="border-b border-gray-200 py-4">
        <span>{question}</span>
        <p className="mt-2 text-gray-600 dark:text-neutral-300">{answer}</p>
      </div>
    </div>
  );
};
