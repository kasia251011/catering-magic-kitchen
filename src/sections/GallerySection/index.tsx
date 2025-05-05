"use client";

import Image from "next/image";

import { IMAGES } from "@/utils/images";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Lightbox from "yet-another-react-lightbox";
import { useState } from "react";
import { Thumbnails } from "yet-another-react-lightbox/plugins";

const GallerySection = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="galeria">
      <div className="container">
        <h2 className="text-center mt-24 mb-14">Galeria</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          <div className="grid gap-4">
            {IMAGES.slice(0, 3).map(({ img, alt, id }, index) => (
              <Image
                key={index}
                className="gallery-img"
                src={img}
                alt={alt}
                placeholder="blur"
                onClick={() => {
                  setOpen(true);
                  setIndex(id);
                }}
              />
            ))}
          </div>
          <div className="grid sm:hidden md:grid sm-hidden-images gap-4">
            {IMAGES.slice(3, 6).map(({ img, alt, id }, index) => (
              <Image
                key={index}
                className="gallery-img"
                src={img}
                alt={alt}
                placeholder="blur"
                onClick={() => {
                  setOpen(true);
                  setIndex(id);
                }}
              />
            ))}
          </div>
          <div className="grid  gap-4">
            {IMAGES.slice(6, 8).map(({ img, alt, id }, index) => (
              <Image
                key={index}
                className="gallery-img"
                src={img}
                placeholder="blur"
                alt={alt}
                onClick={() => {
                  setOpen(true);
                  setIndex(id);
                }}
              />
            ))}
            <div
              className="relative cursor-pointer "
              onClick={() => {
                setOpen(true);
                setIndex(IMAGES[7].id);
              }}
            >
              <Image
                key={index}
                className="gallery-img"
                src={IMAGES[8].img}
                alt={IMAGES[8].alt}
                placeholder="blur"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#0009] rounded-lg flex justify-center items-center">
                <span className="text-white text-5xl">
                  + {IMAGES.length - 8}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={IMAGES.map(({ img }) => ({ src: img.src }))}
        index={index}
        plugins={[Thumbnails]}
      />
    </section>
  );
};

export default GallerySection;
