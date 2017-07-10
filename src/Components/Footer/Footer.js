import React from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

//Mark: media and styling imports
import {FaHeart} from 'react-icons/lib/fa'
import './Footer.css'

export const Footer = () => {
    return (
        <footer>
              <p>Coded with <FaHeart/> by Michał 'Mikoziq' Pietrzyk</p>
        </footer>
    )
}

