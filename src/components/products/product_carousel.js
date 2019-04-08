import React, {Component} from 'react';

class productCarousel extends Component {
    componentDidMount(){
        M.Carousel.init(this.carousel, {
            duration: 200,
            shift: 50,
            indicators: true
          });
    }
    render(){
        const img = this.props.images.map(imageurl=>{
            return  (
                <a className="carousel-item" href="#" key={imageurl} >
                    <img src={`/dist/${imageurl}`} alt={name}/>
                </a>
            )
        })
        return(
            <div className="carousel center" ref={(element)=> this.carousel = element}>
            {img}
            {img}
            </div>
        )
    }
}

export default productCarousel;