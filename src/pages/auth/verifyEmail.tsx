import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { verifyEmail } from '../../slices/auth/authSlice'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../../hooks'

const VerifyEmail = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { search } = useLocation()

  const token = new URLSearchParams(search).get('token')

  useEffect(() => {
    if(token) {
      dispatch(verifyEmail(token))
        .unwrap()
        .then(() => {
          navigate('/let-us-know-you') 
        })
        .catch((error:any) => {
          toast.error('Verification failed, please try again.')
        })
    }
  }, [token, dispatch, navigate])

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Verifying your email...</h2>
     
        <p className="text-sm text-gray-500">Please wait while we verify your email address...</p>
      </div>
    </div>
  )
}

export default VerifyEmail
