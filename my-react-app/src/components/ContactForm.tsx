import React, { useState } from 'react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  qualification: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    qualification: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Not everyone gets{' '}
              <span className="text-green-600">hands-on-experience</span>{' '}
              by us, check if you're the one!
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Earn industry-recognized certificates with each workshop you complete,
              showcasing your expertise and commitment to professional excellence.
            </p>
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
             
                <img src="Avatar group (1).png"/>
              </div>
              <span className="text-xs sm:text-sm text-gray-600">4532+ Learners</span>
            </div>
            <div className="flex">
              <button className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base">
                Enroll Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Let's connect</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Mobile Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                />
              </div>
              <div>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  required
                >
                  <option value="">Select Qualification</option>
                  <option value="bachelors">Bachelor's Degree</option>
                  <option value="masters">Master's Degree</option>
                  <option value="phd">PhD</option>
                </select>
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                  rows={4}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors text-sm sm:text-base"
              >
                Get Free Career Evaluation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};