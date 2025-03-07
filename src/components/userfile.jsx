import React,  {useState} from 'react'



const userfile = () => {
    
    // useEffect(() => {
    //     const fecthdt = async () =>{
    //         try{
    //             const response = await axios.get("///htp:xyz");
    //             setUser(response);
    //         }catch (err){
    //             SetError("fail the fetch data");      
    //     } 
    //     finally {
    //         setloading(false)
    //     }
    // };
    // fecthdt()
    // },[]);
    const [userData, setuserData] = useState([
        { id: 2, namee: "irfan", balance: 70 },
        { id: 3, namee: "irfan", balance: 65 },
      ]);
      
      const sortBalance = () => {
        const sortedUsers = [...userData].sort((a, b) => a.balance - b.balance);
        setuserData(sortedUsers); 
      };
      
  return (
    <div>
        
      {/* {user.map((user)=>)} */}
    </div>
  )
}

export default userfile
