import React from 'react';
import { AiTwotoneStar } from 'react-icons/ai';

const ReviewCard = ({review}) => {

    console.log(review);
    const {serviceName , reviewerName , reviewerEmail , starRatings ,comments , photoURL} = review
    return (
        <div className='shadow bg-slate-50 py-3 px-6 rounded-md flex justify-start items-center gap-10 my-2'>
             <div>
                <img className='h-20 rounded-full w-20' src={photoURL} alt="" />
             </div>
             <div className=''>
              <h2 className='font-medium text-lg text-sky-500'>{serviceName}</h2>  
             <p className="flex gap-1 items-center py-3">
          {[...Array(starRatings).keys()].map((k, index) =>
            k === 0 ? (
              <AiTwotoneStar key={index} className="text-amber-400 text-lg" />
            ) : (
              <AiTwotoneStar key={index} className="text-amber-400 text-lg" />
            )
          )}
          <span className="mr-2 ml-3 rounded bg-sky-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">
            {starRatings} .0
          </span>
        </p>
        <h2 className='font-medium text-lg'>{reviewerName}</h2>
        <p className='py-2'>{comments}</p>
             </div>
        </div>
    );
};

export default ReviewCard;