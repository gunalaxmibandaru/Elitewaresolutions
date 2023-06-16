import React,{useState,useEffect} from 'react'
import {FaRegGem, FaUserAlt} from "react-icons/fa"
import './index.css'
import User from '../User'
import Bookmark from '../Bookmark'

const Header = () => {
    const [user,setUser]= useState(true)
    const [bookmark,setBookmark]=useState(false)
    const [search,setSearch]=useState('')
    const [data, setadData] = useState([]);
    useEffect(() => {
        async function getData() {
          const response = await fetch("https://api.github.com/users");
          const data = await response.json();
          const apiData = data.map(e=>(
            {...e,isBookmarked:false}
          ))
          setadData([...apiData])
        }
        getData();
      },[]);

 const onClickUser = ()=> {
       setUser(true);
       setBookmark(false)
    }
    const onClickBookmark = ()=> {
        setBookmark(true);
        setUser(false)
     }
     const onChangeSearchInput = (event) => {
        setSearch(event.target.value)
        
     }
    
  return (
    <>
    <div className='header'>
        <div className='iconcontainer'>
        <FaUserAlt className='icon'/>
        <h1 className='userdetails' >User details</h1>
       
        </div>
        <div>
            <input type='text' className='search-box' placeholder='search here' onChange={onChangeSearchInput} value={search}/>
        </div>
        <div>
            <button className={`${user? "activebtn": "nonactivebtn"} `} onClick={onClickUser}>Users</button>
            <button className={`${bookmark? "activebtn": "nonactivebtn"} `} onClick={onClickBookmark}>Bookmark Users</button>

        </div>
    </div>
    <User user={user} search={search} data={data} setadData={setadData}/>
    <Bookmark data={data} bookmark={bookmark} search={search} setadData={setadData} />
    </>
  )
}

export default Header