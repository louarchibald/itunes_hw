import React from "react";
import ChartEntry from "./ChartEntry";
import './ChartEntry.css';

const ChartList = ({songs}) => {
    
    const chartItems = songs.map((song, index) => {
        return <ChartEntry song={song} key={index} index={index}/>
    })

  return (
    <>
        <ul>
            {chartItems}
        </ul>
        
    </>
  )

  
}






export default ChartList;