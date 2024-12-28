// import React from 'react';

// const plans = [
//   {
//     name: 'Basic',
//     price: '₹99',
//     features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
//   },
//   {
//     name: 'Pro',
//     price: '₹199',
//     features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
//   },
//   {
//     name: 'Enterprise',
//     price: '₹299',
//     features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
//   },
//   {
//     name: 'Ultimate',
//     price: '₹399',
//     features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
//   }
// ];

// export const Pricing: React.FC = () => {
//   return (
//     <div className="bg-gray-50 py-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">Choose the Perfect Plan</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {plans.map((plan, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg p-6">
//               <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
//               <p className="text-3xl font-bold text-green-600 mb-6">{plan.price}</p>
//               <ul className="mb-6">
//                 {plan.features.map((feature, i) => (
//                   <li key={i} className="flex items-center mb-2">
//                     <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
//                       <path d="M5 13l4 4L19 7"></path>
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
//                 Get Started
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
import React from "react";
import { Clock } from "lucide-react";
import { CheckCircle } from "lucide-react";
interface PlanDuration {
    months: number;
    price: number;
    discount?: number;
  }
  
  interface PlanProps {
    name: string;
    description: string;
    features: string[];
    durations: PlanDuration[];
    isPopular?: boolean;
  }
  
  const Plan: React.FC<PlanProps> = ({ 
    name, 
    description, 
    features, 
    durations,
    isPopular 
  }) => {
    const [selectedDuration, setSelectedDuration] = React.useState(0);
  
    return (
      <div className={`bg-white rounded-xl p-6 shadow-sm relative ₹{isPopular ? 'border-2 border-green-600' : ''}`}>
        {isPopular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Flash Sale
            </span>
          </div>
        )}
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
  
        {/* Duration Selector */}
        <div className="flex gap-2 mb-6">
          {durations.map((duration, index) => (
            <button
              key={index}
              onClick={() => setSelectedDuration(index)}
              className={`flex-1 p-2 text-sm rounded ₹{
                selectedDuration === index
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {duration.months} Month{duration.months > 1 ? 's' : ''}
            </button>
          ))}
        </div>
  
        {/* Timer */}
        <div className="flex items-center gap-2 mb-6 text-red-600">
          <Clock className="w-4 h-4" />
          <span className="text-sm font-semibold">Offer ends in 2:45:30</span>
        </div>
  
        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              ₹{durations[selectedDuration].price}
            </span>
            {durations[selectedDuration].discount && (
              <span className="text-gray-500 line-through text-sm">
                ₹{durations[selectedDuration].price + durations[selectedDuration].discount}
              </span>
            )}
          </div>
          <p className="text-sm text-gray-600">per month</p>
        </div>
  
        {/* Features */}
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
  
        <button className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors">
          Subscribe Now
        </button>
      </div>
    );
  };
  
  export const Pricing: React.FC = () => {
    const plans: PlanProps[] = [
      {
        name: "StarterBoost",
        description: "Perfect for those looking for a quick career jumpstart.",
        features: [
          "Access to basic courses",
          "Community support",
          "Monthly progress tracking",
          "Basic certification",
        ],
        durations: [
          { months: 1, price: 3499 },
         
        ],
      },
      {
        name: "Pro Growth",
        description: "Ideal for those wanting more in-depth preparation and support.",
        features: [
          "All Basic features",
          "1-on-1 mentoring",
          "Job placement assistance",
          "Advanced certification",
        ],
        durations: [
          { months: 6, price: 9499 },
         
        ],
        isPopular: true,
      },
      {
        name: "Online Accelator",
        description: "Designed for individuals aiming for substantial growth and industry exposure",
        features: [
          "All Pro features",
          "Custom learning path",
          "Priority support",
          "Industry certification",
        ],
        durations: [
          { months: 6, price: 16999 },
          
        ],
      },
      {
        name: "Ultimate success",
        description: "The complete package for mastering skills and maximising job opportunities.",
        features: [
          "All Pro features",
          "Custom learning path",
          "Priority support",
          "Industry certification",
        ],
        durations: [
          { months: 12, price: 34999 },
         
        ],
      },
    ];
  
    return (
      <div className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Choose the Perfect Plan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the plan that best fits your learning goals and budget. All
              plans include access to our community and basic support.
            </p>
          </div>
  
          {/* Adjusted Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <Plan key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  
  
  

