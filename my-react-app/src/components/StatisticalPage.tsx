import React from 'react';

interface StatCardProps {
  title: string;
  number: string;
  description: string;
  illustration: React.ReactNode;
  variant?: 'green' | 'mint';
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  number, 
  description, 
  illustration,
  variant = 'green' 
}) => {
  const bgColor = variant === 'mint' 
    ? 'bg-green-50' 
    : 'bg-green-600';

  const textColor = variant === 'mint'
    ? 'text-green-800'
    : 'text-white';

  return (
    <div className={`rounded-2xl p-6 ${bgColor} ${textColor} relative overflow-hidden transition-transform hover:scale-105`}>
      <div className="relative z-10">
        <h3 className="text-sm font-medium mb-2">{title}</h3>
        <p className="text-4xl lg:text-5xl font-bold mb-3">{number}</p>
        <p className="text-sm lg:text-base opacity-90">{description}</p>
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-90">
        {illustration}
      </div>
    </div>
  );
};

export const StatisticalPower: React.FC = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Experience The{' '}
            <span className="text-green-600">Statistical</span>{' '}
            Power Of Skillup
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our workshops are designed to deliver tangible results, helping you boost your career prospects and achieve your goals. Here's what our graduates are saying:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            title="Learners"
            number="7,234+"
            description="Dive into a community of learners driven by ambition and guided by industry leaders."
            
            illustration={
              
                <img src="阅读学习扁平矢量人物场景插画17孟菲斯_17.png"></img>
              
            }
          />

          <StatCard
            title="Mentor"
            number="1,200+"
            description="At Skillup, learning is more than just theory. Our mentors bring years of experience."
            variant="mint"
            illustration={
                <img src="阅读开学季扁平矢量人物场景插画学习110600孟菲斯-01.png"></img>
            }
          />

          <StatCard
            title="Retention Rate"
            number="73%"
            description="Our workshops are designed with one goal in mind: your success and growth."
            illustration={
             <img src="阅读开学季扁平矢量人物场景插画学习210300孟菲斯-01.png"/>
            }
          />
        </div>

        {/* Dotted line decoration */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute left-1/3 right-1/3 top-0 border-t-2 border-dashed border-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

