import React, { useEffect, useState } from 'react'

function User() {
    const[user,setUser]=useState([])
    async function fetchUser(){
        try{
            const response=await fetch('https://dummyjson.com/users')
        const result=await response.json()
        console.log(result);

        if(result?.users){
            setUser(result?.users)
        }else{
            setUser([])
        }
        }
        catch(error){
           console.log(error);
           
        }
    
        
    }
    useEffect(() => {
        fetchUser();
    }, []);
  return (
    <div>
 
     <h1>All USers</h1>
     <ul>
{
     user?.length>0?(
     user.map(use=>(
        <li key={use?.id}>
            
<p>{use?.firstName}</p>
<p>{use?.lastName}</p>

        </li>
     ))):( <p>User Not Found</p>)
}
</ul>


     </div>
  );
}

export default User
