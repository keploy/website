interface headingType { content: string; className: string }
export const Heading = ({ content, className }: headingType) => {
  return <div className={` ${className}`}>{content}</div>;
};
