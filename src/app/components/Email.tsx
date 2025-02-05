// import React from 'react';

// const Email = () => {
//   return (
//     <div id="email" className="bg-gray-100 py-12">
//       {/* Apply hover effect on the entire section */}
//       <section className="bg-white shadow-lg rounded-lg text-gray-600 body-font mx-auto w-[90%] max-w-[1350px] group hover:scale-105 transform transition duration-300 ease-in-out">
//         <div className="container px-5 py-12 mx-auto">
//           <div className="flex flex-col text-center w-full mb-12">
//             <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
//               Join the club and get the benefits
//             </h1>
//             <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
//               Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
//             </p>
//           </div>
//           <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
//             <div className="relative flex-grow w-full text-center sm:flex-row flex-col sm:items-center">
//               <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="your@email.com"
//                 className="h-[54px] w-full sm:w-auto bg-gray-100 bg-opacity-60 rounded-l border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-8 leading-8 transition-colors duration-200 ease-in-out"
//               />
//               <button className="text-white bg-indigo-500 border-0 focus:outline-none h-[54px] sm:w-32 w-full sm:rounded-r rounded-t mt-4 sm:mt-0 hover:bg-indigo-600 text-[12px] transition duration-300 ease-in-out">
//                 Signup
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Email;

                // 4 feb



                import React from 'react';

const Email = React.memo(() => {
  return (
    <div id="email" className="bg-gray-100 py-12">
      <section className="bg-white shadow-lg rounded-lg text-gray-600 body-font mx-auto w-[90%] max-w-[1350px] group hover:scale-105 transform transition duration-300 ease-in-out">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Join the club and get the benefits
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
            </p>
          </div>
          <div className="flex w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
            <div className="relative flex-grow w-full text-center sm:flex-row flex-col sm:items-center">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your@email.com"
                className="h-[54px] w-full sm:w-auto bg-gray-100 bg-opacity-60 rounded-l border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-8 leading-8 transition-colors duration-200 ease-in-out"
              />
              <button className="text-white bg-indigo-500 border-0 focus:outline-none h-[54px] sm:w-32 w-full sm:rounded-r rounded-t mt-4 sm:mt-0 hover:bg-indigo-600 text-[12px] transition duration-300 ease-in-out">
                Signup
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default Email;