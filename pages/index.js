
import find from 'local-devices';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.scss';
import { Card } from '../components/Card';
import PCContent from '../components/PCContent';
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
    <div id="Home" className={styles.home}>
      <header id={styles.home_header}>
     <h1>The Decentralized Network Project</h1>
     <button className={styles.btn_primary} onClick={()=> {
      if(typeof history !== 'undefined') {
        history.back();
      }

      else {
        () => {}
      }
     }}> Go Previous</button>

      </header>
      <main className={styles.main}>
     {queryMatchesRefferersIP ?
        <div id="clients" className={styles.clients}>
          <ul className={styles.container}>

         
        {clients.length > 0 ? clients.map((client, key) => <li key={key}>
          <Card url={`http://${client.ip}:3000/?query=${myip}`} ip={client.ip} />
         
        </li>): null}
        </ul>
     </div>
      : 
      <PCContent />}

      </main>
    
  
    
    </div>
  )
}
