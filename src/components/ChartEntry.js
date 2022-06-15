import React from "react";



const ChartEntry = ({song, index}) => {


    return (

        <li>{index + 1}. <b className="song-name">{song["im:name"].label}</b>   //  <i>{song["im:artist"].label}</i></li>

    )
    
    
  
}

export default ChartEntry;