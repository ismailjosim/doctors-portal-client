import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

import gallery01 from '../../assets/gallery/gallery01.jpg';
import gallery02 from '../../assets/gallery/gallery02.jpg';
import gallery03 from '../../assets/gallery/gallery03.jpg';
import gallery04 from '../../assets/gallery/gallery04.jpg';
import gallery05 from '../../assets/gallery/gallery05.jpg';

const Gallery = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h4 className="text-accent font-bold text-xl uppercase">OUR gallery</h4>
        <h2 className="text-secondary font-normal text-3xl">View Our Gallery</h2>
      </div>
      <section className="py-6">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <PhotoProvider className="shadow-md">
            <PhotoView src={gallery01}>
              <img
                src={gallery01}
                alt=""
                className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-base-100 aspect-square"
              />
            </PhotoView>
            <PhotoView src={gallery02}>
              <img
                src={gallery02}
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-base-100 aspect-square"
              />
            </PhotoView>
            <PhotoView src={gallery03}>
              <img
                src={gallery03}
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-base-100 aspect-square"
              />
            </PhotoView>
            <PhotoView src={gallery04}>
              <img
                src={gallery04}
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-base-100 aspect-square"
              />
            </PhotoView>
            <PhotoView src={gallery05}>
              <img
                src={gallery05}
                alt=""
                className="w-full h-full rounded shadow-sm min-h-48 bg-base-100 aspect-square"
              />
            </PhotoView>
          </PhotoProvider>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
