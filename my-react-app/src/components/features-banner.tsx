export function FeaturesBanner() {
    const features = [
      { icon: "💰", text: "100% Money Back Guarantee" },
      { icon: "🎯", text: "100% Job Placement/Assistance" },
      { icon: "🚫", text: "We Don't Sell You Courses" },
      { icon: "🎤", text: "Mock Interviews" },
      { icon: "📊", text: "Monthly Progress Report" }
    ]
  
    return (
      <div className="w-full bg-gray-100 py-2 overflow-x-auto">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between space-x-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
              <span className="text-xl">{feature.icon}</span>
              <span className="text-sm font-medium">{feature.text}</span>
              {index < features.length - 1 && (
                <span className="text-gray-300 ml-4">|</span>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }
  