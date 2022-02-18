import React from 'react';
import './style.css';

class Images extends React.Component {
    constructor(props) {
        super(props);
    }

    arrangePhotos(){
        let imgTagArray = [];
        let imageObj = this.props.images;
        if(imageObj.length > 9){
            let imageArray = imageObj.map(image => image.src.medium);
            let lowIndex = 0;
            let highIndex = 10;
            for(let imageIndex = lowIndex; imageIndex < highIndex; imageIndex++){
                imgTagArray.push(
                    <div key={imageIndex} className='thumbnailDiv'>
                        <img className='thumbnail' src={imageArray[imageIndex]} alt='fail'></img>
                    </div>
                );
            }
            return (
                <div className='thumbnailDivHolder componentDiv'>{imgTagArray}</div>
            );
        } else {
            return (
                <div className='thumbnailDivHolder componentDiv'><h2>No Results Found...</h2></div>
            );
        }

    }

    render() {
        let imgs = this.props.images;
        return(
            <div>
                {imgs ? this.arrangePhotos() : null}
            </div>
        );
    }
}

export default Images;