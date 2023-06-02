import React from 'react'
import "../page/about.css"

const About = () => {
  return (
    <div class="responsive-container-block bigContainer">
      <h1 className='text-5xl font-bold'>About us</h1>
  <div class="responsive-container-block Container">
    <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/eaboutus1.svg"/>
    <div class="allText aboveText">
      <p class="text-blk headingText">
        Our Mission
      </p>
      <p class="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
  <div class="responsive-container-block Container bottomContainer">
    <img class="mainImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/xpraup2.svg" />
    <div class="allText bottomText">
      <p class="text-blk headingText">
        Our Vision
      </p>
      <p class="text-blk subHeadingText">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <p class="text-blk description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
      </p>
      <button class="explore">
        Explore
      </button>
    </div>
  </div>
</div>
  )
}

export default About