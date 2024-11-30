import loaderIcon from '../assets/loader.svg'

type ButtonProps = {
    isLoading: boolean
    className?:string
    children:React.ReactNode
}

export default function SubmitButton({ isLoading, className, children} : ButtonProps ){
    return(
        <button type="submit" disabled={isLoading} className={className ?? 'bg-rose-600 w-full'}>
            {isLoading ? (
                <div className="flex items-center justify-center gap-4">
                    <img
                        src={loaderIcon}
                        alt="loader"
                        width={24}
                        height={24}
                        className="animate-spin"
                    />
                    Loading ...
                </div>
            ): children}
        </button>
    )
}