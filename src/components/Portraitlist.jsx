import React from "react";
import Pencil from './images/Pencil.jpeg';
import ColorPencil from './images/ColorPencil.jpeg';
import BallPen from './images/Ball-Pen.jpeg';
import DigiDraw from './images/DigiDraw.jpeg';

function Portraitlist() {
  const products = [
    {
      id: 1,
      name: "Pencil Portraits",
      href: "#",
      imageSrc: Pencil,
      imageAlt: "Pencil Portraits",
      price: "₹700",
      description1: "Size - A4",
      description2: "Graphite Pencils",
      description3: "Shipping charges included."
    },

    {
        id: 2,
        name: "Color Pencil Portraits",
        href: "#",
        imageSrc: ColorPencil,
        imageAlt: "Color Pencil",
        price: "₹1000",
        description1: "Size - A4",
        description2: "Color Pencils",
        description3: "Shipping charges included."
    },

    {
        id: 3,
        name: "Pen Portraits",
        href: "#",
        imageSrc: BallPen,
        imageAlt: "Pen Portraits",
        price: "₹800",
        description1: "Size - A4",
        description2: "Blue Ball Pen",
        description3: "Shipping charges included."
    },

    {
        id: 4,
        name: "Digital Portraits",
        href: "#",
        imageSrc: DigiDraw,
        imageAlt: "Digital Portraits",
        price: "₹1200",
        description1: "Size - A4",
        description2: "Digitally made",
        description3: "Portrait sent via mail."
    },
    // More products...
  ];
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900" id="portraits">
          Portraits
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a className="text-gray-900" href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.description1}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.description2}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.description3}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portraitlist;
