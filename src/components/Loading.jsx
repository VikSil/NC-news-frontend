import {SyncLoader} from 'react-spinners';

export default function Loading(){
    return (
        <main className="mx-5 mt-4 ">
            <h2 className="text-center mb-4">Page is loading, please wait...</h2>     
            <SyncLoader className="text-center" color="#8b0000" />
        </main>        
    )
}