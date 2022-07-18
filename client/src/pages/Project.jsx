import {Link,useParams} from 'react-router-dom';
import Spinner from '../components/Spinner.jsx';
import { useQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries.js';
import ClientInfo from '../components/ClientInfo.jsx';
import DeleteProjectButton from '../components/DeleteProjectButton.jsx';
import EditProjectForm from '../components/EditProjectForm.jsx';




export default function Project() {

    const {id} = useParams();
    const {loading,error,data} = useQuery(GET_PROJECT,{variables:{id}});

    if(loading) return <Spinner/>;
    if(error) return <p>Error</p>;

    
  return <>
    {!loading && !error && (
        <div className="mx-auto card p-5">
            <Link to="/" className='btn btn-light btn-sm w-25 d-inline ms-auto'>Back</Link>
            <h1>{data.project.name}</h1>
            <p>{data.project.description}</p>
            <h5 className='mt-3'>Project Status</h5>
            <p className='lead'>{data.project.status}</p>
            
            <ClientInfo client={data.project.client} />
            <EditProjectForm project={data.project}/>
            <DeleteProjectButton projectId={data.project.id}/>
            
            

        </div>
    )} 

  </>
}
