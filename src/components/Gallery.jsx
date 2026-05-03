"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";


export default function AnimalGallery({ imageItems }) {
  const formattedItems = [
    {
      original: imageItems.front,
      thumbnail: imageItems.front,
    },
    {
      original: imageItems.side,
      thumbnail: imageItems.side,
    },
    {
      original: imageItems.back,
      thumbnail: imageItems.back,
    },
  ];

  return (
    <div className="w-full max-w-2xl rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
      <ImageGallery 
        items={formattedItems} 
        showPlayButton={false}
        showNav={false}
        disableThumbnailScroll={true}
        lazyLoad={true}
      />
    </div>
  );
}