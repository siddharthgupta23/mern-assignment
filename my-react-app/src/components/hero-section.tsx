// import { Button } from './ui/Button';

// export const HeroSection = () => {
//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Text Content */}
//         <div className="space-y-8">
//         <h1 className="font-inter text-[48px] font-bold leading-[56px] text-left">
//         <span className="text-black">The</span>
//             <span className="text-green-600"> Ultimate</span> <br />
//             <span className="text-green-600">.Launchpad</span> 
//             <span className="text-black">For</span> <span className="text-green-600">Your Career!</span>
//           </h1>

//           <p className="font-inter text-lg leading-[28px] text-gray-600">
//             Where Your Future Begins: Unlock Guaranteed Career Success With The Best Guidance.
//           </p>
//           <div className="flex items-center space-x-4">
//             <div className="flex -space-x-2">
//               {/* Circular Profile Images */}
//           <img src="Avatar group (1).png"></img>
//             </div>
//             <div>
//               <p className="font-inter text-sm font-semibold text-gray-900">4,532+ Learners</p>
//               <p className="font-inter text-sm text-gray-600">
//                 took their first step to succeed in their career
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
//               Enroll Now
//             </Button>
//             <Button variant="outlined" className="border-green-600 text-green-600 hover:bg-green-50 px-8">
//               Get Free Career Evaluation
//             </Button>
//           </div>
//         </div>

//         {/* Right Column - Image with Circles */}
//         <div className="relative hidden lg:block">
//           <div className="absolute w-[495px] h-[495px] rounded-full bg-green-100 opacity-50" 
//                style={{ top: '-50px', left: '-100px' }} />
//           <div className="absolute w-[412px] h-[412px] rounded-full bg-green-200 opacity-50"
//                style={{ top: '50px', left: '-50px' }} />
//           <div className="relative w-full max-w-md mx-auto">
//             <img
//               src="/placeholder.svg"
//               alt="Student learning"
//               className="object-cover w-full h-auto rounded-lg shadow-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { Button } from './ui/Button';

// export const HeroSection = () => {
//   return (
//     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//         {/* Left Column - Text Content */}
//         <div className="space-y-8">
//           <h1 className="font-inter text-[48px] font-bold leading-[56px] text-left">
//             <span className="text-black">The</span>
//             <span className="text-green-600"> Ultimate</span> <br />
//             <span className="text-green-600">.Launchpad</span>
//             <span className="text-black">For</span> <span className="text-green-600">Your Career!</span>
//           </h1>
//           <p className="font-inter text-lg leading-[28px] text-gray-600">
//             Where Your Future Begins: Unlock Guaranteed Career Success With The Best Guidance.
//           </p>
//           <div className="flex items-center space-x-4">
//             <div className="flex -space-x-2">
//               <img src="Avatar group (1).png" alt="Learners" />
//             </div>
//             <div>
//               <p className="font-inter text-sm font-semibold text-gray-900">4,532+ Learners</p>
//               <p className="font-inter text-sm text-gray-600">
//                 took their first step to succeed in their career
//               </p>
//             </div>
//           </div>
//           <div className="flex space-x-4">
//             <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
//               Enroll Now
//             </Button>
//             <Button variant="outlined" className="border-green-600 text-green-600 hover:bg-green-50 px-8">
//               Get Free Career Evaluation
//             </Button>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };
import { Button } from './ui/Button';
import { CompanyLogos } from './companylogos';
import { ComprehensiveSkills } from './ComprehensiveSliis';
import { StatisticalPower } from './StatisticalPage';
import { Pricing } from './Pricing';
import { Testimonials } from './testimonials';
import { GetCertified } from './GetCertified';
import { GlobalExperience } from './GlobalExperience';
import { ContactForm } from './ContactForm';
import { KickstartCareer } from './KickStartCarrer';
import { Footer } from './Footer';

export const HeroSection = () => {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-8">
          <h1 className="font-inter text-[48px] font-bold leading-[56px] text-left relative">
            <span className="text-black">The</span>
            <span className="text-green-600"> Ultimate</span> <br />
            <span className="text-green-600">.Launchpad</span>
            <span className="text-black">For</span> <span className="text-green-600">Your Career!</span>
          </h1>
          <p className="font-inter text-lg leading-[28px] text-gray-600">
            Where Your Future Begins: Unlock Guaranteed Career Success With The Best Guidance.
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
              <img src="Avatar group (1).png" alt="Learners" />
            </div>
            <div>
              <p className="font-inter text-sm font-semibold text-gray-900">4,532+ Learners</p>
              <p className="font-inter text-sm text-gray-600">
                took their first step to succeed in their career
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
              Enroll Now
            </Button>
            <Button
              variant="outlined"
              className="border-green-600 text-green-600 hover:bg-green-50 px-8"
            >
              Get Free Career Evaluation
            </Button>
          </div>
          <div>
         
  <span className="text-green-600">✔</span> 100% Money Back Guarantee if you're not satisfied with the Evaluation

          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative hidden lg:block">
          <img
            src="Group 1693 (2).png"
            alt="Student learning"
            className="w-full max-w-[400px] h-auto object-contain"
          />
        </div>


      </div>
      <br></br>
      <p className="font-lato text-2xl font-semibold leading-7 text-center underline decoration-transparent">
      Partnered with 1000+ companies world wide Including
</p>
      <br></br>
      <br></br>
      <div><CompanyLogos/></div>
<div><ComprehensiveSkills/></div>
<div><StatisticalPower/></div>
<div><GetCertified/></div>
<div><Pricing/></div>
<div><Testimonials/></div>
<div><GlobalExperience/></div>
<div><KickstartCareer/></div>
<div><ContactForm/></div>
<div><Footer/></div>
    </div>
  );
};
