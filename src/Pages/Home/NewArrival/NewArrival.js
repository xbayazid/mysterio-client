import React, { useEffect, useRef } from 'react';
import videoUrl from '../../../assets/arriaval.mp4'

const NewArrival = () => {
    const videoRef = useRef(null);

    useEffect(() => {
      // Start playing the video as soon as it's loaded
      videoRef.current.play();
    }, []);
    return (
        <div className='my-5 hidden lg:block'>
            <div className='text-center'>
                <p className="uppercase text-sm text-gray-600">new collection</p>
                <h1 className='text-3xl'>The Spring Collection</h1>
            </div>
            <div className="relative flex items-center justify-center py-80 mt-3">
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        loop
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative z-10 p-8 bg-gray-900 bg-opacity-50 text-white">
        <h1 className="text-3xl font-bold mb-2">Smily Collection out now</h1>
        <p className="text-lg leading-9">A tribute to positive vibes</p>
        <button className='uppercase p-3 mt-3' style={{border: "2px solid white"}}>shop now</button>
      </div>
    </div>
    </div>
    );
};

export default NewArrival;