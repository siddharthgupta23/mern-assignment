import { useState, ChangeEvent, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';

const AdminLogin: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');
  const navigate = useNavigate(); // React Router's navigate function

  // Explicitly typing the form submission event
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();  // Prevents the default form submit behavior
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('adminToken', data.token);
        navigate('/admin/dashboard'); // Redirect to the admin dashboard
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Admin Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange} // Use the email change handler
                required
              />
            </div>
            <div>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange} // Use the password change handler
                required
              />
        
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminLogin;
