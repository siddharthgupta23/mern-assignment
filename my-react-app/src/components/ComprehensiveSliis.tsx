// import React from 'react';

// interface SkillCardProps {
//   title: string;
//   description: string;
//   icon: React.ReactNode;
// }

// const SkillCard: React.FC<SkillCardProps> = ({ title, description, icon }) => {
//   return (
//     <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
//       <div className="mb-4 text-green-600">{icon}</div>
//       <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
//       <p className="text-sm sm:text-base text-gray-600">{description}</p>
//     </div>
//   );
// };

// export const ComprehensiveSkills: React.FC = () => {
//   return (
//     <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
//           <div className="space-y-4 sm:space-y-6">
//             <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
//               We Offer a{' '}
//               <span className="text-green-600">Comprehensive</span>{' '}
//               Skill Set
//             </h2>
//             <p className="text-base sm:text-lg text-gray-600">
//               Supercharge your career with our expert-led programs, meticulously designed to equip you with the most sought-after skills for today's competitive job market.
//             </p>
//             <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 text-sm sm:text-base">
//               Enroll Now
//               <svg className="ml-2 w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
//             <SkillCard
//               title="Global Alumni Network"
//               description="Join a community of professionals working in top companies worldwide."
//               icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
//               </svg>}
//             />
//             <SkillCard
//               title="Real-time Project"
//               description="Work on actual projects to gain practical experience and build your portfolio."
//               icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
//               </svg>}
//             />
//             <SkillCard
//               title="Tech Skills"
//               description="Master the latest technologies and programming languages in demand."
//               icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
//               </svg>}
//             />
//             <SkillCard
//               title="Creative & Design Skills"
//               description="Learn essential design principles and tools used in the industry."
//               icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  subtitle?: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {subtitle && (
        <h4 className="text-green-600 font-medium mb-2">{subtitle}</h4>
      )}
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const ComprehensiveSkills: React.FC = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              We Offer a{' '}
              <span className="text-green-600">Comprehensive</span>
              <br />
              Skill Set
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
              Supercharge your career with our expert-led programs, meticulously designed to equip you with the most sought-after skills for today's competitive job market.
            </p>
            <button className="inline-flex items-center text-green-600 font-semibold hover:text-green-700 transition-colors group">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <img src="Group (4).png"></img>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <FeatureCard
              title="Global Alumni Network"
              subtitle="Exclusive Access to Our"
              description="Connect with a diverse community of successful professionals across the globe. Our alumni are excited to help newcomers thrive and grow, giving you exclusive access to this valuable community."
            />
            <FeatureCard
              title="Real-time Project"
              subtitle="Hands-On Learning with"
              description="Experience real-world learning that goes beyond theory. Work on actual projects, gaining invaluable hands-on experience."
            />
            <FeatureCard
              title="Tech Skills"
              subtitle="Cutting-Edge"
              description="Stay ahead of the curve with expertise in AI, Machine Learning, Cloud Computing, and Data Science. Learn the latest technologies while mastering the future of industries."
            />
            <FeatureCard
              title="Creative & Design Skills"
              subtitle="Develop"
              description="Unlock your creative potential with our comprehensive design courses. From UI/UX Design to Visual Communication, master the tools and techniques needed for success."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

