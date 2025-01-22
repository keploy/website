// __mocks__/next/image.js
const NextImage = ({ src, alt, ...props }) => {
    return <img src={src} alt={alt} {...props} />;
  };
  
  export default NextImage;