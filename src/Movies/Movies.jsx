import React from 'react';
import Movie from '../Movie/Movie.jsx';
import './styles.css';

class Movies extends React.Component {
    getMovie = (name, likes, banner, hero) => {
        return <Movie name={name} likes={likes} banner={banner} hero={hero} />
    };
    render () {
        return (
        <div className='movies-selection'>
            {this.getMovie(
            'Saaho' ,
            '231' ,
            'https://s3.ap-southeast-1.amazonaws.com/images.deccanchronicle.com/dc-Cover-rth7jee52gtb10m9drgsss70r4-20190830100038.Medi.jpeg',
            'prabas'
            )}
            {this.getMovie(
            'sye raa narasimha reddy' ,
            '31' ,
            'https://thefederal.com/file/2019/09/Syeraa-Narasimha-Reddy_960x540.jpg',
            'chiranjeevi'
            )}
            {this.getMovie(
            'f2 fun and frustration ' ,
            '23' ,
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTykaNy7PhvS96G4txGqxisahM0XVG4-EwMOCh8dsw9Br2Zj77W',
            'varunvenky'
            )}
        </div>
    );
}    
}
export default Movies;