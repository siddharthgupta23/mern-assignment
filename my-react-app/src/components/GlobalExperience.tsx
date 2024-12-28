import React from 'react';

interface StepCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
}

const StepCard: React.FC<StepCardProps> = ({ title, icon, description }) => {
  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-green-600">{icon}</div>
      <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm sm:text-base text-gray-600">{description}</p>
    </div>
  );
};

export const GlobalExperience: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-green-600 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-white text-sm sm:text-base">
              <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Get 100% Money Back Guaranteed!</span>
            </div>
            <button className="bg-white text-green-600 px-4 py-1 rounded text-sm sm:text-base w-full sm:w-auto">
              Enroll Now
            </button>
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4 sm:space-y-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
                  There's a whole world out there. Why not get{' '}
                  <span className="text-green-600">hands-on-experience</span>{' '}
                  from top?
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Earn industry-recognized certificates with each workshop you complete, showcasing your expertise and commitment to professional excellence.
                </p>
                <div className="flex items-center space-x-2">
                  <div className="flex -space-x-2">
                    <img src="Avatar group (1).png"></img>
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600">4532+ Learners</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base">
                    Enroll Now
                  </button>
                  <button className="border border-green-600 text-green-600 px-4 sm:px-6 py-2 rounded-md hover:bg-green-50 transition-colors text-sm sm:text-base">
                    Get Free Career Counselling
                  </button>
                </div>
              </div>
              <div className="relative hidden sm:block">
                <img
                  src="original-b93abe1472897c8a503205900c6a14d2-removebg-preview 1.png"
                  alt="Global Learning"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* <div className="p-4 sm:p-6 lg:p-8 border-t">
            <h3 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">
              Kickstart Your Career in 4 Steps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <StepCard
                title="Application"
                description="Submit your application and get started on your journey"
                icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>}
              />
              <StepCard
                title="Hands-on Experience"
                description="Work on real projects with industry experts"
                icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>}
              />
              <StepCard
                title="Mock Interview"
                description="Practice with real interview scenarios"
                icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>}
              />
              <StepCard
                title="Get Referrals"
                description="Get recommended to top companies"
                icon={<svg className="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>}
              />
            </div>
          </div> */}


        </div>
      </div>
    </div>
  );
};

