import React from 'react';

const BgImage = ({img , content}) => {
    return (
        <section
        style={{ backgroundImage: `url(${img})` }}
        className="md:h-96 h-64 bg-cover flex items-center justify-center"
      >
        <h2 className="md:text-4xl text-2xl uppercase tracking-widest text-center text-white font-semibold">
          {content}
        </h2>
      </section>
    );
};

export default BgImage;