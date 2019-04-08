import React, {Component} from 'react';

class productCarousel extends Component {
    componentDidMount(){
        const config = {
            duration: 200,
            shift: 50,
            indicators: true
          }
        M.Carousel.init(this.carousel, config);
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
            <div className="col s12 m8 carousel" ref={(element)=> this.carousel = element}>
            {img}
            {img}
            </div>
        )
    }
}

export default productCarousel;