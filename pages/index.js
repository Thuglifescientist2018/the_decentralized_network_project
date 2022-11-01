
import find from 'local-devices';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';


export async function getServerSideProps(context) {

  const { req } = context;
  let host;
   if (req) {
     host =  req.headers.host;
     }
  const devices = await find();
 console.log("context query", context.query)
 let query;

 if(!context.query.query) {
   query = host
 }
 else {
   query = context.query.query
 }
  return {
    props: {
      devices: devices,
      myip: host,
      queryMatchesRefferersIP: query.includes(host)
    }
  }
}
export default function Home({devices, myip, queryMatchesRefferersIP}) {


console.log(myip)
  const [clients, setClients] = useState([])
  useEffect(() => {
    setClients(devices)
    if(clients.length > 0) {
      console.log('clients: ', clients)
    }
  


  },[])

  return (
    <div id="Home" className={styles.bg_one}>
     <h1>The Decentralized Network Project</h1>
     <button onClick={()=> {
      if(typeof history !== 'undefined') {
        history.back();
      }

      else {
        () => {}
      }
     }}> Go Previous</button>
     {queryMatchesRefferersIP ?
        <div id="clients">
        {clients.length > 0 ? clients.map((client, key) => <li key={key}>
          <a href={`http://${client.ip}:3000/?query=${myip}`}>{client.ip}</a>
        </li>): null}
     </div>
      : <h1>Coming Soon!</h1>}
    
  
    
    </div>
  )
}
