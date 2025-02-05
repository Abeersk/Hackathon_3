// import React from 'react';
// import Image from 'next/image';

// import pic3 from '@/public/pic3.jpeg';
// import features2 from '@/public/features2.jpeg';
// import pic2 from '@/public/pic2.jpeg';

// const imageData = [
//   {
//     src: pic3,
//     alt: 'Hero Image',
//     title: 'The Dandy Chair',
//     price: '£250',
//   },
//   {
//     src: features2,
//     alt: 'Feature 2 Image',
//     title: 'The Silky Vase',
//     price: '£125',
//   },
//   {
//     src: pic2,
//     alt: 'Pic 2 Image',
//     title: 'The Lucy Lamp',
//     price: '£399',
//   },
// ];

// const Listings2 = () => {
//   return (
//     <section id="listings2" className="text-gray-600 body-font">
//       <div className="container px-5 py-24 mx-auto">
//         <div className="flex flex-wrap -m-4">
//           {imageData.map((item, index) => (
//             <div
//               key={index}
//               className={`${
//                 index === 0 ? 'lg:w-1/2' : 'lg:w-1/4'
//               } md:w-1/2 sm:w-full w-full p-4 group`}
//             >
//               {/* Parent div for hover effect */}
//               <div className="block relative rounded overflow-hidden bg-white shadow group-hover:shadow-lg transition-shadow duration-300">
//                 <a className="block relative h-96">
//                   <Image
//                     src={item.src}
//                     alt={item.alt}
//                     layout="fill"
//                     objectFit="cover"
//                     className="absolute group-hover:scale-105 transition-transform duration-300"
//                   />
//                 </a>
//                 <div className="mt-4 text-center group-hover:text-gray-700 transition-colors duration-300">
//                   <h2 className="text-gray-900 title-font text-lg font-medium group-hover:font-bold">
//                     {item.title}
//                   </h2>
//                   <p className="mt-1">{item.price}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Listings2;


       // 4 feb

       import React from 'react';
       import Image from 'next/image';
       
       import pic3 from '@/public/pic3.jpeg';
       import features2 from '@/public/features2.jpeg';
       import pic2 from '@/public/pic2.jpeg';
       
       const imageData = [
         {
           src: pic3,
           alt: 'Hero Image',
           title: 'The Dandy Chair',
           price: '£250',
         },
         {
           src: features2,
           alt: 'Feature 2 Image',
           title: 'The Silky Vase',
           price: '£125',
         },
         {
           src: pic2,
           alt: 'Pic 2 Image',
           title: 'The Lucy Lamp',
           price: '£399',
         },
       ];
       
       const Listings2 = React.memo(() => {
         return (
           <section id="listings2" className="text-gray-600 body-font">
             <div className="container px-5 py-24 mx-auto">
               <div className="flex flex-wrap -m-4">
                 {imageData.map((item, index) => (
                   <div
                     key={index}
                     className={`${
                       index === 0 ? 'lg:w-1/2' : 'lg:w-1/4'
                     } md:w-1/2 sm:w-full w-full p-4 group`}
                   >
                     <div className="block relative rounded overflow-hidden bg-white shadow group-hover:shadow-lg transition-shadow duration-300">
                       <a className="block relative h-96">
                         <Image
                           src={item.src}
                           alt={item.alt}
                           layout="fill"
                           objectFit="cover"
                           className="absolute group-hover:scale-105 transition-transform duration-300"
                           loading="lazy" // Lazy load images
                         />
                       </a>
                       <div className="mt-4 text-center group-hover:text-gray-700 transition-colors duration-300">
                         <h2 className="text-gray-900 title-font text-lg font-medium group-hover:font-bold">
                           {item.title}
                         </h2>
                         <p className="mt-1">{item.price}</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
           </section>
         );
       });
       
       export default Listings2;