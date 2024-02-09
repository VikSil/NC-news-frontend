export default function Error(props){
    const {errorCode} = props

    return (
        <>
        <main className="mx-5 mt-4 ">
            {errorCode === 400 && <h2 className="text-center mb-4">Bad request</h2> }
            {errorCode === 401 && <h2 className="text-center mb-4">Unauthorised</h2> }
            {errorCode === 402 && <h2 className="text-center mb-4">Forbidden</h2> }
            {errorCode === 404 && <h2 className="text-center mb-4">404 - Page not found</h2> }
            {errorCode === 408 && <h2 className="text-center mb-4">Request Timeout</h2> }
            {errorCode === 429 && <h2 className="text-center mb-4">Too Many requests</h2> }                
        </main>      
        </>
    )
}