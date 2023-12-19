import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from '../header/Header'
import ControlledCarousel from '../slider/Slider'
import SearchAirplanes from '../search/SearchAirplanes'


export default function ClientView() {
    return (
        <>
            <div className='ClientView'>
                <Header />
                <ControlledCarousel />
                <SearchAirplanes />
            </div>
        </>
    )
}