import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'  // Updated to useNavigate for React Router v6
import { Button } from '../../../components/ui/Button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/Table'

interface Enrollment {
  _id: string
  fullName: string
  email: string
  phoneNumber: string
  qualification: string
  createdAt: string
}

const AdminDashboard: React.FC = () => {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const navigate = useNavigate()  // Use React Router's useNavigate hook

  useEffect(() => {
    const fetchEnrollments = async () => {
      const token = localStorage.getItem('adminToken')
      if (!token) {
        navigate('/admin/login')  // Redirect to login if no token
        return
      }

      try {
        const response = await fetch('http://localhost:5000/api/enrollments', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })

        if (response.ok) {
          const data = await response.json()
          setEnrollments(data)
        } else {
          throw new Error('Failed to fetch enrollments')
        }
      } catch (error) {
        setError('Error fetching enrollments')
      } finally {
        setLoading(false)
      }
    }

    fetchEnrollments()
  }, [navigate])

  const handleSignOut = () => {
    localStorage.removeItem('adminToken')
    navigate('/admin/login')  // Redirect to login after sign out
  }

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>
  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Enrollment Dashboard</h1>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Qualification</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {enrollments.map((enrollment) => (
              <TableRow key={enrollment._id}>
                <TableCell>{enrollment.fullName}</TableCell>
                <TableCell>{enrollment.email}</TableCell>
                <TableCell>{enrollment.phoneNumber}</TableCell>
                <TableCell>{enrollment.qualification}</TableCell>
                <TableCell>{new Date(enrollment.createdAt).toLocaleDateString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default AdminDashboard
