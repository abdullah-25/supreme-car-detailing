import { useState, useEffect, useRef } from "react";

const VideoPlayer = ({ src, isPlaying, onEnded }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Autoplay failed:", error);
        });
      }
    } else if (!isPlaying && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      className={`w-full rounded-lg object-cover ${isPlaying ? 'aspect-video' : 'h-full'}`}
      controls={isPlaying}
      muted={isPlaying}
      playsInline
      loop={!isPlaying}
      preload="metadata"
      onEnded={onEnded}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      title: "Reliable Mobile Services",
      video: "/videos/video1.mp4",
      thumbnail: "/videos/thumb.png",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          WATCH US IN ACTION
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We offer what others don't
        </p>

        <div className="space-y-8">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              {playingVideo === index ? (
                <div className="aspect-video bg-black rounded-lg overflow-hidden">
                  <VideoPlayer
                    src={video.video}
                    isPlaying={true}
                    onEnded={() => setPlayingVideo(null)}
                  />
                </div>
              ) : (
                <div className="relative">
                  <div className="aspect-video w-full rounded-lg bg-black overflow-hidden">
                    <VideoPlayer
                      src={video.video}
                      isPlaying={false}
                    />
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black/10 hover:bg-black/20 transition-colors"
                    onClick={() => setPlayingVideo(index)}
                  >
                    <button
                      className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition transform group-hover:scale-110"
                      aria-label="Play video"
                    >
                      <svg
                        className="w-6 h-6"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
