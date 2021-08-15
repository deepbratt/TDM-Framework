
import React, { useEffect, useState } from 'react'
import LogComponent from './LogComponent';


export default function SignIn() {
useEffect(() => {
  console.log("signin")
}, [])
  const [Flipped, setFlipped] = useState(true);
  console.log("signin")
  return (   
    Flipped ? ( 
      <LogComponent login={true} 
      onPress={() => console.log("hellox")} onClick={()=>setFlipped(false)}/>
  ) : (
    <LogComponent login={false} 
    onPress={() => console.log("hellox")} onClick={()=>setFlipped(true)}/>

  )
  );
}