export default function Error(props){
    const {error} = props
    return (
        <main className="mx-5 mt-4">
            <h2 className="text-center">Data loading failed with an error:</h2>   
            <p className="text-center">{error}</p>          
        </main>   
    )
}