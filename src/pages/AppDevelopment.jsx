import React, { useRef, useState } from 'react';

const AppDevelopment = () => {
  const videoRefs = useRef([]);
  const [unlockedVideos, setUnlockedVideos] = useState([0]);

  const videos = [
    {
      title: "Getting Started with App Development",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "UI Design Fundamentals",
      src: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "Publishing Your App",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const handleEnded = (index) => {
    if (index + 1 < videos.length) {
      setUnlockedVideos((prev) => [...new Set([...prev, index + 1])]);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">App Development Course</h1>

      {videos.map((video, index) => (
        <div key={index} className="mb-10 border p-4 rounded-xl shadow bg-white">
          <h2 className="text-xl font-semibold mb-2">{index + 1}. {video.title}</h2>

          {unlockedVideos.includes(index) ? (
            <>
              <video
                width="100%"
                height="240"
                controls
                ref={(el) => (videoRefs.current[index] = el)}
                onEnded={() => handleEnded(index)}
                className="rounded-lg"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-green-600 mt-2 font-medium">
                {unlockedVideos.includes(index + 1)
                  ? "✅ Completed"
                  : "▶️ Watch Now"}
              </p>
            </>
          ) : (
            <div className="text-gray-500 text-center p-6 border-2 border-dashed rounded-lg">
              🔒 Locked. Watch the previous video to unlock.
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AppDevelopment;
