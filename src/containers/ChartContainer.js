import React, { useState, useEffect } from "react";
import ChartEntry from "../components/ChartEntry";
import ChartList from "../components/ChartList";
import ChartDetail from "../components/ChartDetail";
import './ChartContainer.css';


const ChartContainer = () => {

    const [songs, setSongs] = useState([]);

    useEffect(() => {
      getSongs();
    }, [])

    const getSongs = function(){
        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongs(data.feed.entry))
    }

    return (

        <div className="main-container">

            <ChartList songs={songs}/>
            <ChartDetail />
        </div>
    )

  
}






export default ChartContainer;