import React from 'react'
import {time} from '../utilities/dateFilter'
import {convertToClockTime} from '../utilities/convertToClockTime'
import Scroll from 'react-scroll'

//Mark: media and styles imports
import {FaEmpire, FaChevronCircleDown, FaTelevision} from 'react-icons/lib/fa'
import './Header.css'

export const Header = () => {
  const scroller = Scroll.scroller;
  return (
      <header>
        <h1>Electronic Program Guide</h1>
        <p>A simple application for simple schedules done just to be nuts... <FaEmpire/></p>
        <h2> Current fixed application time is: {convertToClockTime(time)} </h2>

        <div name="button" className="header-background-icon">
          <FaTelevision/>
        </div>

        <div className="header-teaser-button" onClick={() => {
          scroller.scrollTo('myNavigationAnchor', {
            duration: 1500,
            delay: 100,
            smooth: true,
            containerId: 'ContainerElementID',
          })
        }}>
          <p>Click below to see schedules!</p>
          <FaChevronCircleDown/>
        </div>
      </header>
  )
}



