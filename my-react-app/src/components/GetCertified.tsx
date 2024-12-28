// import React from 'react';

// export const GetCertified: React.FC = () => {
//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-4">Get Certified With Every Completion</h2>
//           <p className="text-lg text-gray-600 mb-8">
//             Earn industry-recognized certificates with each workshop you complete,
//             showcasing your expertise and commitment to professional excellence.
//           </p>
//         </div>
//         <div className="flex justify-center">
//           <img src="/certificate.png" alt="Certificate" className="max-w-full h-auto" />
//         </div>
//         <div className="mt-8 text-center">
//           <p className="text-lg font-semibold">1532+ Learners</p>
//           <p className="text-gray-600">have successfully skilled-up and have been officially certified</p>
//         </div>
//         <div className="mt-8 flex justify-center space-x-4">
//           <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors">
//             Enroll Now
//           </button>
//           <button className="border border-green-600 text-green-600 px-6 py-2 rounded-md hover:bg-green-50 transition-colors">
//             Get Free Career Counselling
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { ArrowRight, Linkedin, CheckCircle } from 'lucide-react';

export const GetCertified: React.FC = () => {
  return (
    <div className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* LinkedIn Share Button */}
          <button className="absolute top-0 left-0 inline-flex items-center gap-2 bg-[#0A66C2] text-white px-4 py-2 rounded-md text-sm hover:bg-[#004182] transition-colors">
            <Linkedin className="w-4 h-4" />
            <span className="hidden sm:inline">Shareable in LinkedIn</span>
          </button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pt-16 sm:pt-12">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Get{' '}
                <span className="text-green-600">Certified</span>{' '}
                With Every Completion
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Earn industry-recognized certificates with each workshop you complete, 
                showcasing your expertise and commitment to professional excellence.
              </p>

              {/* Learners Section */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
              <img src="Avatar group (1).png"/>
                </div>
                <div>
                  <p className="font-semibold">1532+ Learners</p>
                  <p className="text-sm text-gray-600">have successfully skilled-up and have been officially certified</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Monthly Progress Report</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span>Hands-on-experience on real-time projects</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors">
                  Enroll Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="inline-flex items-center justify-center border-2 border-green-600 text-green-600 px-6 py-3 rounded-md hover:bg-green-50 transition-colors">
                  Get Free Career Counselling
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative w-full aspect-[4/3]">
                <img
                  src="3943613 1.png"
                  alt="Certification"
                  className="w-full h-full object-contain"
                />
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-100 rounded-full opacity-20" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-100 rounded-full opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
