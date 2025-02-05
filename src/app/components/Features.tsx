// import Link from 'next/link';
// import React from 'react';
// import { CiCircleCheck } from 'react-icons/ci';
// import { MdOutlinePriceChange } from 'react-icons/md';
// import { PiPlantLight } from 'react-icons/pi';
// import { TbTruckDelivery } from 'react-icons/tb';

// const featureData = [
//   {
//     Icon: TbTruckDelivery,
//     title: 'Next day as standard',
//     description: 'Order before 3pm and get your order the next day as standard',
//   },
//   {
//     Icon: CiCircleCheck,
//     title: 'Made by true artisans',
//     description: 'Handmade crafted goods made with real passion and craftsmanship',
//   },
//   {
//     Icon: MdOutlinePriceChange,
//     title: 'Unbeatable prices',
//     description: 'For our materials and quality you won’t find better prices anywhere',
//     adjustDescription: true, // Adding this flag to adjust the description margin
//   },
//   {
//     Icon: PiPlantLight,
//     title: 'Recycled packaging',
//     description: 'We use 100% recycled packaging to ensure our footprint is manageable',
//   },
// ];

// const Features = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto">
//           <div className="text-center mb-20">
//             <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
//               What makes our brand different
//             </h1>
//           </div>
//           {/* Responsive Flex Layout */}
//           <div className="flex flex-wrap justify-center gap-6">
//             {featureData.map(({ Icon, title, description, adjustDescription }, index) => (
//               <div
//                 key={index}
//                 className="p-6 bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/4 flex flex-col justify-between"
//               >
//                 <div className="flex flex-col items-center gap-4 mb-4">
//                   {/* Icon on top */}
//                   <div className="text-5xl text-gray-700">
//                     <Icon />
//                   </div>
//                   {/* Title and Description centered below the icon */}
//                   <h2 className="font-medium title-font tracking-widest text-gray-900 text-xl mb-1 text-center">
//                     {title}
//                   </h2>
//                   {/* Conditionally adding margin to description for 'Unbeatable prices' */}
//                   <p
//                     className={`text-gray-700 text-center ${adjustDescription ? 'mt-4' : ''}`}
//                   >
//                     {description}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <Link href="/all-products">
//             <button className="flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:bg-slate-600 transition duration-300">
//               View collection
//             </button>
//           </Link>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Features;



                   // 4 feb


                   import Link from 'next/link';
import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';
import { MdOutlinePriceChange } from 'react-icons/md';
import { PiPlantLight } from 'react-icons/pi';
import { TbTruckDelivery } from 'react-icons/tb';

const featureData = [
  {
    Icon: TbTruckDelivery,
    title: 'Next day as standard',
    description: 'Order before 3pm and get your order the next day as standard',
  },
  {
    Icon: CiCircleCheck,
    title: 'Made by true artisans',
    description: 'Handmade crafted goods made with real passion and craftsmanship',
  },
  {
    Icon: MdOutlinePriceChange,
    title: 'Unbeatable prices',
    description: 'For our materials and quality you won’t find better prices anywhere',
    adjustDescription: true,
  },
  {
    Icon: PiPlantLight,
    title: 'Recycled packaging',
    description: 'We use 100% recycled packaging to ensure our footprint is manageable',
  },
];

const Features = React.memo(() => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              What makes our brand different
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {featureData.map(({ Icon, title, description, adjustDescription }, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 hover:bg-gray-200 transition duration-300 rounded-lg shadow-lg w-full sm:w-1/2 lg:w-1/4 flex flex-col justify-between"
              >
                <div className="flex flex-col items-center gap-4 mb-4">
                  <div className="text-5xl text-gray-700">
                    <Icon />
                  </div>
                  <h2 className="font-medium title-font tracking-widest text-gray-900 text-xl mb-1 text-center">
                    {title}
                  </h2>
                  <p
                    className={`text-gray-700 text-center ${adjustDescription ? 'mt-4' : ''}`}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <Link href="/all-products">
            <button className="flex mx-auto mt-16 text-white bg-slate-500 border-0 py-2 px-8 focus:outline-none rounded text-lg hover:bg-slate-600 transition duration-300">
              View collection
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
});

export default Features;