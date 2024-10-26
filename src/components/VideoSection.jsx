// components/VideoSection.jsx
import { useState } from "react";
import video1 from "../../public/videos/video1.mov"; // Adjust path according to your project structure
import video2 from "../../public/videos/video2.mov";
import video3 from "../../public/videos/video3.mov";

export default function VideoSection() {
  const [playingVideo, setPlayingVideo] = useState(null);

  const videos = [
    {
      title: "Reliable Mobile Services",
      video: video1,
      thumbnail: "/thumbnails/thumb1.jpg",
    },
    {
      title: "Same Day Reliable Services",
      video: video2,
      thumbnail: "/thumbnails/thumb2.jpg",
    },
    {
      title: "Mobile Detailing at Your Home or Office",
      video: video3,
      thumbnail: "/thumbnails/thumb3.jpg",
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

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div key={index} className="relative group">
              {playingVideo === index ? (
                <video
                  className="w-full rounded-lg object-cover aspect-video"
                  controls
                  autoPlay
                  onEnded={() => setPlayingVideo(null)}
                >
                  <source src={video.video} type="video/quicktime" />
                  <source src={video.video} type="video/mp4" />{" "}
                  {/* Add fallback format */}
                  Your browser does not support the video tag.
                </video>
              ) : (
                <>
                  <div className="aspect-video w-full rounded-lg bg-black overflow-hidden">
                    <video
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                      muted
                      playsInline
                      loop
                      preload="metadata"
                    >
                      <source src={video.video} type="video/quicktime" />
                      <source src={video.video} type="video/mp4" />
                    </video>
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
