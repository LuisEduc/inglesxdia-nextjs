
import { useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { useState } from 'react'
import AdSense from 'react-adsense';

const settings = {
  showIndicators: false,
  showArrows: true,
  emulateTouch: true,
  showStatus: false,
  showThumbs: false,
  centerMode: false,
  preventMovementUntilSwipeScrollTolerance: true,
  swipeScrollTolerance: 40,
};

export default function CardCarousel({ data }) {

  const [audioVoc, setAudioVoc] = useState(data.palabras[0].audio);

  let refCarousel = useRef()
  let refAudio = useRef()

  const onChange = (item) => {
    setAudioVoc(data.palabras[item].audio)
    refAudio.current.audio.current.pause()
    refAudio.current.audio.current.currentTime = 0
  }

  return (
    <>
      <Carousel ref={refCarousel} {...settings} onChange={onChange}>
        {
          data.palabras.map(({ id, imagen }) => (
            <div key={id} className="carousel-voc">
              <Image
                src={`${imagen}`}
                width="85%"
                height="100%"
                layout="responsive"
                objectFit="cover"
                placeholder="blur"
                blurDataURL="/img/placeholder.webp"
                sizes="48vw"
                priority
              />
            </div>
          ))
        }
      </Carousel>
      <AdSense.Google
        // 300x100-voc-bajo
        client='ca-pub-3630578707238850'
        slot='6114932695'
        style={{ display: 'block', width: 100 + '%', height: 100 + 'px', marginBottom: 15 + 'px', marginTop: -8 + 'px' }}
        format=''
      />
      <div className="audio-palabras mx-auto">
        <AudioPlayer
          ref={refAudio}
          src={`https://admin.inglesxdia.com/api/audio/${audioVoc}`}
          customAdditionalControls={[]}
          customVolumeControls={[]}
          autoPlay={false}
          autoPlayAfterSrcChange={false}
          preload="none"
        />
      </div>
    </>
  );
}