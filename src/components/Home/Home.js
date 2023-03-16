import React from 'react'
import './Home.css';

const Home = (props) => { 
  if (props.DSwitch) {
    return (
      <div className='Deuteranopia-theme' style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})` }} >


        <h1>Welcome....</h1>
        <h4>Travel with us to beautiful places around the world</h4>

        <h2>
          TravelGOat offers you to travel and explore different places around the world.

        </h2>

        <h3>
          TravelGOat offers you to travel and explore different places around the world.
          You can customize your trip here and get best services during your travel.
        </h3>
        <div className='Explore'>
          <img src="./orange.jpg" alt="dest" width="100" height="100" />
          <img src="./green.jpg" alt="dest" width="100" height="100" />
          <img src="./blue.jpg" alt="dest" width="100" height="100" />
          <img src="./yellow.jpg" alt="dest" width="100" height="100" />

        </div>

      </div>
    )
  } else if(props.PSwitch){
  
    return (
      <div className='Protanopia-theme' style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})` }} >


        <h1>Welcome....</h1>
        <h4>Travel with us to beautiful places around the world</h4>

        <h2>
          TravelGOat offers you to travel and explore different places around the world.

        </h2>

        <h3>
          TravelGOat offers you to travel and explore different places around the world.
          You can customize your trip here and get best services during your travel.
        </h3>
        <div className='Explore'>
          <img src="./orange.jpg" alt="dest" width="100" height="100" />
          <img src="./green.jpg" alt="dest" width="100" height="100" />
          <img src="./blue.jpg" alt="dest" width="100" height="100" />
          <img src="./yellow.jpg" alt="dest" width="100" height="100" />

        </div>

      </div>
    )
  }else if(props.TSwitch){
    return (
      <div className='Tritanopia-theme' style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val}) ` }} >


        <h1>Welcome....</h1>
        <h4>Travel with us to beautiful places around the world</h4>

        <h2>
          TravelGOat offers you to travel and explore different places around the world.

        </h2>

        <h3>
          TravelGOat offers you to travel and explore different places around the world.
          You can customize your trip here and get best services during your travel.
        </h3>
        <div className='Explore'>
          <img src="./orange.jpg" alt="dest" width="100" height="100" />
          <img src="./green.jpg" alt="dest" width="100" height="100" />
          <img src="./blue.jpg" alt="dest" width="100" height="100" />
          <img src="./yellow.jpg" alt="dest" width="100" height="100" />

        </div>

      </div>
    )
  } else if(((props.DSwitch)||(props.PSwitch)||(props.TSwitch))===false) {
    return (
      <div className='Home' style={{ filter: `brightness(${props.brightness_val}) contrast(${props.contrast_val}) saturate(${props.saturate_val}) grayscale(${props.monochrome_val})` }} >
        <div className='background'>
          {/* <img src="./backimage.jpg" alt="backimage"/> */}
          <h1>Welcome....</h1>
          <h4>Travel with us to beautiful places around the world</h4>

          <h2>
            TravelGOat offers you to travel and explore different places around the world.

          </h2>

          <h3>
            TravelGOat offers you to travel and explore different places around the world.
            You can customize your trip here and get best services during your travel.
          </h3>
          <div className='Explore'>
            <img src="./orange.jpg" alt="dest" width="100" height="100" />
            <img src="./green.jpg" alt="dest" width="100" height="100" />
            <img src="./blue.jpg" alt="dest" width="100" height="100" />
            <img src="./yellow.jpg" alt="dest" width="100" height="100" />

          </div>

        </div>

      </div>



    )
  }
}

export default Home
