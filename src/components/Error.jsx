export default function Error(props){
    const {error} = props
    return (
        <div className="mx-5 mt-4">
            <h3 className="text-center">Data loading failed with an error:</h3>   
            <p className="text-center">{error}</p>          
        </div>   
    )
}