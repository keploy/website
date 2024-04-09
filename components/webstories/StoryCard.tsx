import React from 'react';
import Image from 'next/image';
type StoryCardProps = {
    imagesrc: string;
    CardDescription: string;
};

const StoryCard = ({ imagesrc, CardDescription }: StoryCardProps) => {
    return (
        <div className='flex flex-col'>
            <Image src={imagesrc} alt={CardDescription} height={100} width={100} />
            <p>{CardDescription}</p>
        </div>
    );
};

export default StoryCard;
