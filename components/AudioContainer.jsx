import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AudioContainer({ titulo, audio }) {
    
    return (
        <div>
            <div className="container-audio">
                <div className="mx-auto text-center">
                    <p className="font-weight-bold text-light">{titulo}</p>
                </div>
                <div >
                    <AudioPlayer
                        src={`https://admin.inglesxdia.com/api/audio/${audio}`}
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                        preload="none"
                    />
                </div>
            </div>
        </div>
    )
}
