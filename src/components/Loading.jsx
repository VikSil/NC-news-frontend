import {SyncLoader} from 'react-spinners';

export default function Loading(){
    return (
        <div className="mx-5 mt-4 ">
            <h3 className="text-center mb-4">Page is loading, please wait...</h3>     
            <SyncLoader className="text-center" color="#8b0000" />
        </div>        
    )
}