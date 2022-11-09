import React from 'react';

const Activity = () => {

    const activities = [
               {id:1, name :'Adventure',des : '15 Destination',img : 'https://i.ibb.co/fGyMNFs/img024.png'},
               {id:2, name :'Trekking',des : '12 Destination',img : 'https://i.ibb.co/5Tqr697/img028.png'},
               {id:3, name :'Camp Fire',des : '7 Destination',img : 'https://i.ibb.co/khDrYRY/img027.png'},
               {id:4, name :'Off Road',des : '2 Destination',img : 'https://i.ibb.co/QJHfygW/img026.png'},
               {id:5, name :'Camping',des : '5 Destination',img : 'https://i.ibb.co/Bt8cdhY/img025.png'},
               {id:6, name :'Exploring',des : '25 Destination',img : 'https://i.ibb.co/XpWYL8g/img029.png'}
    ]

    return (
        <div className='my-12 grid md:grid-cols-6 grid-cols-1 justify-between gap-4'>
            {
               activities.map(activity => {
                return(
                    <div key={activity.id} className="border p-2 px-4 flex flex-col">
                        <img className=' mx-auto' src={activity.img} alt={activity.name}/>
                        <div className='my-4'>
                        <h2 className='text-center font-semibold text-xl'>{activity.name}</h2>
                         <h2 className='text-center text-gray-500 font-medium text-base mt-2'>{activity.des}</h2>
                        </div>
                    </div>
                )
               }) 
            }
        </div>
    );
};

export default Activity;