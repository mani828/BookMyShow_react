import * as React from 'react';
import './style.css';

class Movie extends React.Component {
    render () {
        return (
            <div className='Movie-card'>
                <img src={this.props.banner} />
                <lable>
                 {this.props.likes} {this.props.name} {this.props.hero}
                </lable>
            </div>
        );
    }
}
     
export default Movie;