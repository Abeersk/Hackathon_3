// import React from 'react'
// import Image from 'next/image'
// import pic4 from '@/public/pic4.jpeg'

// const Features1 = () => {
//   return (
//     <div>
//       <section className="text-gray-600 body-font">
//         <div className="container px-5 py-24 mx-auto flex flex-wrap">
//           <div className="flex flex-wrap w-full">
//             <div className="lg:w-1/2 md:w-1/2 pr-0 md:py-6"> {/* Left side */}
//               <div className="flex-grow pl-4">
//                 <h2 className="font-medium title-font text-gray-900 text-2xl mb-1 tracking-wider">
//                   From a studio in London to a global brand with
//                   over 400 outlets {/* New heading */}
//                 </h2>
//                 <p className="leading-relaxed mt-4">
//                   When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
//                 </p>
//                 <p className="leading-relaxed mt-4">
//                   Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
//                 </p>
//               </div>
//             </div>

//             <div className="lg:w-1/2 md:w-1/2 p-4 w-full h-96"> {/* Adjusted width */}
//               <div className="relative h-full w-full rounded overflow-hidden"> {/* Use h-full for full height */}
//                 <Image
//                   src={pic4}
//                   alt="Pic 2 Image"
//                   layout="fill"
//                   objectFit="cover"
//                   className="absolute inset-0"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Features1


                //4 feb


                import React from 'react';
import Image from 'next/image';
import pic4 from '@/public/pic4.jpeg';

const Features1 = React.memo(() => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-1/2 md:w-1/2 pr-0 md:py-6">
              <div className="flex-grow pl-4">
                <h2 className="font-medium title-font text-gray-900 text-2xl mb-1 tracking-wider">
                  From a studio in London to a global brand with over 400 outlets
                </h2>
                <p className="leading-relaxed mt-4">
                  When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market.
                </p>
                <p className="leading-relaxed mt-4">
                  Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-1/2 p-4 w-full h-96">
              <div className="relative h-full w-full rounded overflow-hidden">
                <Image
                  src={pic4}
                  alt="Pic 2 Image"
                  layout="fill"
                  objectFit="cover"
                  className="absolute inset-0"
                  loading="lazy" // Lazy load images
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Features1;