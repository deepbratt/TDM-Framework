
import React, { useState } from 'react'
import LogComponent from '.';


export default function SignIn() {

  const [Flipped, setFlipped] = useState(true);
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
// 