import React from 'react';
import { Card } from 'antd';

const Song = (props) => {
    return(
        <Card title={props.trackName} extra={<a href={props.trackViewUrl}>More</a>} style={{ width: 300,border:'solid black 1px',margin:'0.5rem' }}>
            <p><strong>Artist: </strong>{props.artistName}</p>
            <p><strong>Track ID: </strong>{props.trackId}</p>
            <p><strong>Release Date: </strong>{props.releaseDate}</p>
            <p><strong>Country: </strong>{props.country}</p>
        </Card>
    )
}

export default Song;