// components/VideoSection.jsx
import { useState } from "react";

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      title: "Reliable Mobile Services",
      video: "/videos/video1.mov",
      thumbnail: "/thumbnails/thumb1.jpg",
    },
    {
      title: "Same Day Reliable Services",
      video: "/videos/video2.mov",
      thumbnail: "/thumbnails/thumb2.jpg",
    },
    {
      title: "Mobile Detailing at Your Home or Office",
      video: "/videos/video3.mov",
      thumbnail: "/thumbnails/thumb3.jpg",
    },
  ];

  const VideoPlayer = ({ src, isPlaying, onEnded }) => (
    <video
      className={`w-full rounded-lg object-cover ${isPlaying ? 'aspect-video' : 'h-full'}`}
      controls={isPlaying}
      autoPlay={isPlaying}
      onEnded={onEnded}
      muted={!isPlaying}
      playsInline
      loop={!isPlaying}
      preload="metadata"
    >
      <source src={src} type="video/quicktime" />
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          WATCH US IN ACTION
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We offer what others don't
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              {playingVideo === index ? (
                <VideoPlayer
                  src={video.video}
                  isPlaying={true}
                  onEnded={() => setPlayingVideo(null)}
                />
              ) : (
                <>
                  <div className="aspect-video w-full rounded-lg bg-black overflow-hidden">
                    <VideoPlayer
                      src={video.video}
                      isPlaying={false}
                    />
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    onClick={() => setPlayingVideo(index)}
                  >
                    <button
                      className="bg-blue-600 text-white rounded-full p-4 hover:bg-blue-700 transition transform group-hover:scale-110"
                      aria-label="Play video"
                    >
                      ▶
                    </button>
                  </div>
                </>
              )}
              <h3 className="mt-4 text-lg font-semibold">{video.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
