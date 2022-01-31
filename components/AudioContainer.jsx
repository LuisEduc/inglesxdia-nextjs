import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export default function AudioContainer({ titulo, audio }) {
    
    return (
        <div>
            <div className="container-audio">
                <div className="mx-auto text-center">
                    <h5 className="font-weight-bold text-light">{titulo}</h5>
                </div>
                <div >
                    <AudioPlayer
                        src={`https://admin.inglesxdia.com/api/audio/${audio}`}
                        customAdditionalControls={[]}
                        customVolumeControls={[]}
                        autoPlay={false}
                        autoPlayAfterSrcChange={false}
                    />
                </div>
            </div>
        </div>
    )
}
