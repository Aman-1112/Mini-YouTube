import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component{
    state={videos:[],selectedVideo:null} //! This one so that it would re-render the Videolist

    handleSelectedVideo=(sv)=>{
        console.log(sv);
        this.setState({selectedVideo:sv})
    }

    AppHandleOnClick = async(s)=>{
        const apiKey='AIzaSyCAzNQD6nYY3vtWDjIEjHfRIte52d_SSkA';
        console.log(s);
        let res = await axios.get(' https://www.googleapis.com/youtube/v3/search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:apiKey,
                q:s
            }
        });
        console.log(res.data.items);
        this.setState({videos:res.data.items,selectedVideo:res.data.items[0]})
    }
    render(){
        return (
            <div>
                <SearchBar
                    AppHandleOnClick={this.AppHandleOnClick}
                />
                <div className="row">
                    {this.state.selectedVideo && <div className="col-lg"><VideoPlayer  selectedVideo={this.state.selectedVideo} /></div>}
                    <div className="col-lg">
                        <VideoList
                        videos={this.state.videos}
                        handleSelectedVideo={this.handleSelectedVideo}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;