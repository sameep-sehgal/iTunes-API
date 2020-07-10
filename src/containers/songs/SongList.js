import React from 'react';
import { connect } from 'react-redux';
import {Spin} from 'antd';


import Song from './Song';
import Grid from '../styledComponents/Grid';
import Wrapper from '../styledComponents/Wrapper';


class SongList extends React.Component{

    constructor(props){
        super(props)
        if(this.props.searchQuery==null) this.props.history.push('');
    }

    renderSongList = () => {
        return this.props.songs.results.map((song)=>{
            return <Song 
                        trackName={song.trackName}
                        country={song.country}
                        releaseDate={song.releaseDate}
                        trackViewUrl={song.trackViewUrl}
                        artistName={song.artistName}
                        trackId={song.trackId}
                        key={song.trackId}
                    />
        })
    }

    renderSongs = () => {
        if(this.props.songs!==null){
            if(this.props.songs.results===undefined && this.props.songs.error===undefined){
                return(
                    <Wrapper>
                        <Spin size="large" />
                    </Wrapper>
                )
            }
            if(this.props.songs.results!==undefined){
                if(this.props.songs.results.length>0){
                    return this.renderSongList()
                }else if(this.props.songs.results.length === 0){
                    return <h3 style={{textAlign:'center'}}><strong>No Results</strong></h3>
                }
            }
            if(this.props.songs.error){
                return <h3 style={{textAlign:'center'}}><strong>{this.props.songs.error}</strong></h3>
            }else{
                return
            }
        }else{
            return <h3 style={{textAlign:'center'}}><strong>Cannot fetch Results.</strong></h3>
        }
    }


    renderResultNumber = () => {
        if(this.props.songs!==null)
            if(this.props.songs.resultCount)
                return <h4 style={{textAlign:'center'}}>Showing {this.props.songs.resultCount} results.</h4>;
    }


    render(){
        return(
            <>
                <h4 style={{textAlign:'center'}}>Showing results for: {this.props.searchQuery}</h4>
                {this.renderResultNumber()}
                <Grid>
                    {this.renderSongs()}
                </Grid>
            </>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        songs:state.songs,
        searchQuery:state.searchQuery,
    }
}


export default connect(mapStateToProps)(SongList);