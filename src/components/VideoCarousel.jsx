import React from 'react'
import { highlightsSlides } from '../constants'

function VideoCarousel() {
  return (
    <>
        <div className='flex items-center'>
            {highlightsSlides.map((list,i) => (
                <div key={list.id} id='slider' className='sm:pr-20 pr-10'>
                    <div className="video-carousel_container">
                        <div className="w-full h-full flex flex-center rounded-3xl overflow-hidden bg-black">
                            <video id="video" playsInline={true}preload='auto'muted src={list.video} type="video/mp4"></video>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default VideoCarousel