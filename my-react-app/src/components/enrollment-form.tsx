// import { useState } from 'react'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'
// import { Select } from '../components/ui/Select'
// import { X } from 'lucide-react'

// interface EnrollmentFormProps {
//   onClose: () => void;
//   onChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement> | React.ChangeEvent<HTMLSelectElement>) => void;
//   name:string;
// }
// export function EnrollmentForm({ onClose }: EnrollmentFormProps) {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phoneNumber: '',
//     qualification: '',
//     message: ''
//   })

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     try {
//       const response = await fetch('/api/enroll', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       })

//       if (response.ok) {
//         alert('Enrollment submitted successfully!')
//         onClose()
//       } else {
//         throw new Error('Failed to submit enrollment')
//       }
//     } catch (error) {
//       alert('Error submitting enrollment. Please try again.')
//     }
//   }

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//       <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
//         >
//           <X className="h-6 w-6" />
//         </button>

//         <h2 className="text-2xl font-bold text-green-600 mb-2">Let's Connect</h2>
//         <p className="text-gray-600 mb-6">
//           Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Input
//               required
//               placeholder="Full Name"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//             />
//           </div>
//           <div>
//             <Input
//               required
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//             />
//           </div>
//           <div>
//             <Input
//               required
//               placeholder="Phone Number"
//               value={formData.phoneNumber}
//               onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
//             />
//           </div>
//           <div>
//             <Select
//               required
//               value={formData.qualification}
//               onValueChange={(value) => setFormData({ ...formData, qualification: value })}
//             >
//               <option value="">Select Qualification</option>
//               <option value="bachelor">Bachelor's Degree</option>
//               <option value="master">Master's Degree</option>
//               <option value="phd">PhD</option>
//               <option value="other">Other</option>
//             </Select>
//           </div>
//           <div>
//             <Textarea
//               placeholder="Message"
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//             />
//           </div>
//           <Button
//             type="submit"
//             className="w-full bg-green-600 hover:bg-green-700 text-white"
//           >
//             Get Free Career Evaluation 🚀
//           </Button>
//         </form>
//       </div>
//     </div>
//   )
// }

import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Input } from '../components/ui/Input'
import { Textarea } from '../components/ui/TextArea'
import { Select } from '../components/ui/Select'
import { X } from 'lucide-react'


interface EnrollmentFormProps {
  onClose: () => void;

}


export function EnrollmentForm({ onClose }: EnrollmentFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    qualification: '',
    message: '',
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/enrollments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Enrollment submitted successfully!');
        onClose();
      } else {
        throw new Error('Failed to submit enrollment');
      }
    } catch (error) {
      alert('Error submitting enrollment. Please try again.');
    }
  };

  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    console.log('Selected value:', value);
  };
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>

        <h2 className="text-2xl font-bold text-green-600 mb-2">Let's Connect</h2>
        <p className="text-gray-600 mb-6">
          Let's align our constellations! Reach out and let the magic of collaboration illuminate our skies.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Input
              required
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              required
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Input
              required
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
          </div>
          <div>
            {/* <Select
              name="qualification"
              value={selectedValue}
              onValueChange={handleValueChange}
              required
              className="mt-2"
            >
              <option value="">--Please choose an option--</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select> */}
            <Select
              name="qualification" // Change this to match the formData key
              value={formData.qualification} // Bind to formData
              onValueChange={(value) => {
                handleValueChange(value);
                setFormData({ ...formData, qualification: value }); // Update formData
              }}
              required
              className="mt-2"
            >
              <option value="">--Please choose an option--</option>
              <option value="Bachelor's Degree">Bachelor's Degree</option>
              <option value="Master's Degree">Master's Degree</option>
              <option value="PhD">PhD</option>
            </Select>
            <p className="mt-2">Selected: {selectedValue}</p>
          </div>
          <div>
            <Textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </div>
          <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white">
            Get Free Career Evaluation 🚀
          </Button>
        </form>
      </div>
    </div>
  );
}
