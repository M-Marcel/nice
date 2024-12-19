import LogoImage from '../../assets/lanepact-logo.png'
import { useEffect, useState } from 'react'
import SubmitButton from '../../components/SubmitButton'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { toast } from 'react-toastify'
import { forgotPassword, reset, validateOtp } from '../../slices/auth/authSlice'
import Button from '../../components/Button'


type ValidateOtpProps = {
    email: string
    openResetPasswordModal: () => void
}

const ValidateOtp = ({ email, openResetPasswordModal }: ValidateOtpProps) => {

    const [formData, setFormData] = useState({
        email: email,
        otp: Array(4).fill('')
    })
    const { otp } = formData

    const [showResend, setShowResend] = useState(false);
    const [timer, setTimer] = useState(6);

    const dispatch = useAppDispatch()

    const { isLoading, isValidationSuccess, message } = useAppSelector((state) => state.auth)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const { value } = e.target;
        if (!/^\d?$/.test(value)) return;

        setFormData((prevState) => {
            const updatedOtp = [...prevState.otp];
            updatedOtp[index] = value;
            return {
                ...prevState,
                otp: updatedOtp,
            };
        });
    };

    const handleValidateOtp = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;
        if (!email || !otp) {
            toast.error('please provide your email')
        } else {
            const userData = {
                email,
                otp: otp.join('')
            }
            dispatch(validateOtp(userData))
            setShowResend(true);
            setTimer(6);
        }
    }
    const handleResend = () => {
        setShowResend(false);
        setTimer(6);
        const userData = {
            email,
        }
     
        dispatch(forgotPassword(userData))
    }

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (showResend) {
            interval = setInterval(() => {
                setTimer((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval!); // Clear the timer when it reaches 0
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (interval) clearInterval(interval);

        };
    }, [showResend]);


    useEffect(() => {
        if (isValidationSuccess) {
            openResetPasswordModal()
            setShowResend(false)
        }
        return () => {

            dispatch(reset())
        }


    }, [isValidationSuccess, message, dispatch, openResetPasswordModal])




    return (
        <div className="bg-white px-4 py-4 h-full flex flex-col justify-center items-center">
            <div className="w-full max-w-sm">
                <div className="flex flex-col gap-2 mb-6 items-center">
                    <img src={LogoImage} alt="Logo" width={40} height={40} />
                    <h2 className="text-black-500 text-xl font-semibold">Enter OTP</h2>
                    <p className="text-gray-500 text-sm text-center">
                        Enter the 4-digit OTP sent to your email and set a new password.
                    </p>
                </div>
                <form onSubmit={handleValidateOtp} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="hidden text-sm text-gray-400">
                            Email
                        </label>
                        <input
                            type="text"
                            name="email"
                            readOnly
                            value={formData.email}
                            style={{ display: 'none' }}
                            className="text-black-200 px-4 py-2 border border-gray-600 rounded-lg outline-none"

                        />
                    </div>
                    <div className="flex justify-center gap-2 mb-3">
                        {otp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-${index}`}
                                name="otp"
                                type="text"
                                value={digit}
                                onChange={(e) => {
                                    onChange(e, index);
                                    if (e.target.value && index < otp.length - 1) {
                                        const nextInput = document.getElementById(`otp-${index + 1}`);
                                        nextInput?.focus();
                                    }
                                }}
                                maxLength={1}
                                className="w-12 h-12 text-center border border-gray-400 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
                            />
                        ))}
                    </div>
                    {!showResend ? (
                        <SubmitButton
                            isLoading={isLoading}
                            className={`px-4 py-2 w-full text-white rounded-lg text-md ${isLoading ? 'bg-blue-100/55' : 'bg-blue-500 hover:bg-blue-600'
                                }`}
                        >
                            Continue
                        </SubmitButton>
                    ) : (
                        <>
                            {timer > 0 ? (
                                <SubmitButton isLoading={isLoading} className="text-gray-500">
                                    Resend in {timer}s
                                </SubmitButton>
                            ) : (
                                <Button
                                    className="text-blue-500 hover:underline"
                                    onClick={handleResend}
                                >
                                    Resend
                                </Button>
                            )}
                        </>
                    )}
                </form>
            </div>
        </div>
    )
}

export default ValidateOtp