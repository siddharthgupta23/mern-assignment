import React from 'react';
import { ArrowRight } from 'lucide-react';

interface StepCardProps {
  step: number;
  title: string;
  description: string;
  image: string;
  variant?: 'green' | 'mint';
}

const StepCard: React.FC<StepCardProps> = ({ 
  step, 
  title, 
  description, 
  image,
  variant = 'green'
}) => {
  const bgColor = variant === 'mint' ? 'bg-green-50' : 'bg-green-600';
  const textColor = variant === 'mint' ? 'text-green-800' : 'text-white';

  return (
    <div className={`${bgColor} ${textColor} rounded-xl p-6 relative overflow-hidden transition-transform hover:scale-105`}>
      <div className="relative z-10">
        <span className="text-sm font-medium opacity-80">Step {step}</span>
        <h3 className="text-xl font-bold mt-1 mb-2">{title}</h3>
        <p className="text-sm opacity-90">{description}</p>
      </div>
      <img
        src={image}
        alt={title}
        className="absolute bottom-0 right-0 w-32 h-32 object-contain"
      />
    </div>
  );
};


export const KickstartCareer: React.FC = () => {
    const steps: Array<{
      title: string;
      description: string;
      image: string;
      variant: 'green' | 'mint';
    }> = [
      {
        title: "Application",
        description: "Our workshops are designed to deliver tangible results, helping you boost your career prospects.",
        image: "image9.png",
        variant: 'green', // Correctly matches the StepCardProps
      },
      {
        title: "Hands-on-Experience",
        description: "Gain practical skills through real-world projects and expert guidance.",
        image: "internship-job-illustration_52683-50829-removebg-preview (1) 1.png",
        variant: 'mint',
      },
      {
        title: "Mock Interview",
        description: "Practice with real interview scenarios to boost your confidence.",
        image: "istockphoto-1298405314-1024x1024-removebg-preview 1 (1).png",
        variant: 'green',
      },
      {
        title: "Get Referrals",
        description: "Get recommended to top companies and accelerate your career growth.",
        image: "2784130-removebg-preview 1.png",
        variant: 'mint',
      },
    ];
  
    return (
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Kickstart Your Career in{' '}
              <span className="text-green-600">4 Steps</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our workshops are designed to deliver tangible results, helping you boost your career prospects and achieve your goals. Here's what our graduates are saying:
            </p>
            <button className="inline-flex items-center justify-center bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors group">
              Enroll Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
  
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <StepCard
                key={index}
                step={index + 1}
                title={step.title}
                description={step.description}
                image={step.image}
                variant={step.variant} // Correctly typed as 'green' or 'mint'
              />
            ))}
          </div>
        </div>
      </div>
    );
  };
  