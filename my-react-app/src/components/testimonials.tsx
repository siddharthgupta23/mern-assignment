// interface TestimonialProps {
//     name: string;
//     designation: string;
//     location: string;
//     rating: number;
//     text: string;
//     company: string;
//     companyDescription: string;
//     joiningDate: string;
//   }

//   const testimonials: TestimonialProps[] = [
//     {
//       name: "John Doe",
//       designation: "Software Engineer",
//       location: "New York, USA",
//       rating: 5,
//       text: "This program has transformed my career and opened up new opportunities for me.",
//       company: "Tech Innovations Inc.",
//       companyDescription: "A leading company in tech solutions and innovations.",
//       joiningDate: "Joined: January 2022",
//     },
//   ];

//   export function Testimonials() {
//     return (
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Hear from Our Achievers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
//               >
//                 <div className="flex flex-col justify-between h-full">
//                   <div>
//                     <h3 className="font-medium text-lg">{testimonial.text}</h3>
//                     <div className="flex justify-between items-center mt-4">
//                       <div>
//                         <p className="font-semibold">{testimonial.name}</p>
//                         <p className="text-sm text-gray-600">{testimonial.designation}</p>
//                         <p className="text-sm text-gray-500">{testimonial.location}</p>
//                         <p className="text-sm text-gray-400">{testimonial.joiningDate}</p>
//                       </div>
//                       <img
//                         src={`/avatar-${index + 1}.png`}
//                         alt={testimonial.name}
//                         className="w-12 h-12 rounded-full object-cover mt-4"
//                       />
//                     </div>
//                     <div className="mt-4">
//                       <p className="font-semibold">{testimonial.company}</p>
//                       <p className="text-sm text-gray-600">{testimonial.companyDescription}</p>
//                     </div>
//                   </div>
//                   <div className="flex justify-between items-center mt-4">
//                     <div className="flex">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className="h-5 w-5 text-yellow-400"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <div className="flex space-x-2">
//                       <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded">
//                         Learn More
//                       </button>
//                       <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded">
//                         Contact Us
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }


// interface TestimonialProps {
//     name: string;
//     designation: string;
//     location: string;
//     rating: number;
//     text: string;
//     company: string;
//     companyDescription: string;
//     joiningDate: string;
//   }
  
//   const testimonials: TestimonialProps[] = [
//     {
//       name: "John Doe",
//       designation: "Software Engineer",
//       location: "New York, USA",
//       rating: 5,
//       text: "This program has transformed my career and opened up new opportunities for me.",
//       company: "Tech Innovations Inc.",
//       companyDescription: "A leading company in tech solutions and innovations.",
//       joiningDate: "Joined: January 2022",
//     },
//   ];
  
//   export function Testimonials() {
//     return (
//       <div className="bg-white py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-bold text-center mb-12">
//             Hear from Our Achievers
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow relative"
//               >
//                 <div className="flex items-start">
//                   <img
//                     src={`/avatar-${index + 1}.png`}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover mr-4"
//                   />
//                   <div className="flex-1">
//                     <p className="text-green-600 font-semibold text-lg mb-2">
//                       {testimonial.text}
//                     </p>
//                     <p className="text-gray-700 mb-2">
//                       <strong>{testimonial.company}</strong><br />
//                       {testimonial.companyDescription}
//                     </p>
//                     <p className="text-gray-700 mb-4">
//                       <strong>{testimonial.name}</strong><br />
//                       {testimonial.designation}<br />
//                       {testimonial.location}<br />
//                       {testimonial.joiningDate}
//                     </p>
//                   </div>
//                 </div>
//                 <div className="flex justify-between items-center mt-4">
//                   <div className="flex space-x-2">
//                     <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded">
//                       Learn More
//                     </button>
//                     <button className="bg-green-200 text-green-800 font-semibold py-2 px-4 rounded">
//                       Contact Us
//                     </button>
//                   </div>
//                   <div className="flex mt-4">
//                     {[...Array(testimonial.rating)].map((_, i) => (
//                       <svg
//                         key={i}
//                         className="h-5 w-5 text-yellow-400"
//                         fill="currentColor"
//                         viewBox="0 0 20 20"
//                       >
//                         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                       </svg>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }
import React from 'react';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Hear from Our Achievers
          </h2>
          <h1>"Hubnex Skillup has redefined my career path."" </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
          Hubnex Skillup has redefined my career path. The mentorship and hands-on workshops are second to none.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Company Info Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-4">
                <img src="devicon_google.png"/>
                <p>Google</p>
            </h3>
            <p className="text-gray-600 mb-8">
              Join the world's leading technology company and work on products that impact billions of users.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
                Learn More
              </button>
              <button className="border-2 border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition-colors">
                Contact Us
              </button>
            </div>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col h-full justify-between">
              <div>
                <p className="text-xl text-gray-600 italic mb-8">
                  "The program completely transformed my career trajectory. The hands-on experience and mentorship were invaluable. I learned more in 3 months than I did in years of self-study."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-bold text-lg">Divya</h4>
                    <p className="text-gray-600">UX Designer</p>
                    <p className="text-sm text-gray-500">Google Hyderabad</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

