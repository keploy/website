import React, { memo } from 'react';
import Image from "next/image";
import EnterPrice from "@/public/images/navBarIcons/EnterPrice.svg";

const MemoizedImage = memo(() => (
  <Image
    src={EnterPrice}
    alt="Enterprise Solution image"
    width={100}
    height={100}
    className="mt-4"
  />
));

export default MemoizedImage;
