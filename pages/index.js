
import find from 'local-devices';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

export async function getServerSideProps(context) {
  const { req } = context;
  let host;
   if (req) {
     host =  req.headers.host;
     }
  const devices = await find();
 

  return {
    props: {
      devices: devices,
      myip: host
    }
  }
}
export default function Home({devices, myip}) {
  const router = useRouter()
console.log(myip)
  const [clients, setClients] = useState([])
  useEffect(() => {
    setClients(devices)
    if(clients.length > 0) {
      console.log('clients: ', clients)
    }
   
console.log("router: ", router.query)

  },[])
  return (
    <div id="Home">
     <h1>The Decentralized Network Project</h1>
     
     <div id="clients">
        {clients.length > 0 ? clients.map((client, key) => <li key={key}>
          <a href={`http://${client.ip}:3000`}>{client.ip}</a>
        </li>): null}
     </div>
    </div>
  )
}
