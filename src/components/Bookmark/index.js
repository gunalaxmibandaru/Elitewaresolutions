import React, { useState } from 'react'
import {AiOutlineStar,AiTwotoneStar} from "react-icons/ai"

const Bookmark = ({data,bookmark,search,setadData}) => {
    

    const filteredData = data.filter((item) =>
    item.login.toLowerCase().includes(search.toLowerCase())
  );
 
  const  bookMarkStatus = (value) => {
    console.log(value)
  const bookmarkFilter = data.map(e=>{
    if(e.id===value){
      return {...e,isBookmarked:!e.isBookmarked}
    }
    return e
  })
  setadData(bookmarkFilter)
  }

  return (
    <div>
      {bookmark ? (
        <div className="userlist">
          {filteredData.map((e) => (
            e.isBookmarked === true ?
            <>
            <div className="usercontainer">
            {e.isBookmarked === true ?
                <AiTwotoneStar className="activeBookmark" onClick={()=>bookMarkStatus(e.id)}/> :
                <AiOutlineStar className="staricon" onClick={()=>bookMarkStatus(e.id)}/>}
              <img src={e.avatar_url} alt="avatar" className="avatar" />
              <h1 className="username">{e.login}</h1>
              <h1>{e.isBookmarked}</h1>
            </div>
            </> : ""
          ))}{" "}
         
        </div>
      ) : null}
     
    </div>
  )
}

export default Bookmark