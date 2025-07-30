import React, { useRef, useState } from 'react';

const WebDev = () => {
  const videoRefs = useRef([]);
  const [unlockedVideos, setUnlockedVideos] = useState([0]); // First video unlocked

  const videos = [
    {
      title: "Introduction to Web Development",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      title: "HTML Basics",
      src: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      title: "CSS Fundamentals",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const handleEnded = (index) => {
    if (index + 1 < videos.length) {
      setUnlockedVideos((prev) => {
        const updated = [...new Set([...prev, index + 1])];
        return updated;
      });
    }
  };

  const completedCount = unlockedVideos.includes(videos.length - 1)
    ? videos.length
    : unlockedVideos.length;

  const allCompleted = completedCount === videos.length;

  return (
    <div className="max-w-6xl mx-auto p-4 bg-white text-black min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8">🌐 Web Development Course</h1>

      {/* Progress Bar */}
      <div className="mb-8 px-4">
        <div className="flex justify-between text-sm font-medium mb-2">
          <span>{completedCount} of {videos.length} lessons completed</span>
          <span>{Math.round((completedCount / videos.length) * 100)}%</span>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-black transition-all duration-500"
            style={{ width: `${(completedCount / videos.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Video Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg border p-4 flex flex-col justify-between"
          >
            <h2 className="text-lg font-semibold mb-3">
              {index + 1}. {video.title}
            </h2>

            {unlockedVideos.includes(index) ? (
              <>
                <video
                  width="100%"
                  height="180"
                  controls
                  ref={(el) => (videoRefs.current[index] = el)}
                  onEnded={() => handleEnded(index)}
                  className="rounded-lg mb-2"
                >
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className={`font-medium ${unlockedVideos.includes(index + 1) || allCompleted ? "text-black" : "text-gray-700"}`}>
                  {unlockedVideos.includes(index + 1) || allCompleted
                    ? "✅ Completed"
                    : "▶️ In Progress"}
                </p>
              </>
            ) : (
              <div className="text-gray-500 text-center p-4 border-2 border-dashed rounded-lg h-[180px] flex items-center justify-center">
                🔒 Locked. Watch the previous video to unlock.
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Certificate Section */}
      <div className="mt-12 text-center">
        {allCompleted ? (
          <div className="p-6 border-2 border-black rounded-xl bg-black text-white shadow-xl inline-block">
            <h2 className="text-2xl font-bold mb-3">🎉 Congratulations!</h2>
            <p className="text-lg mb-4">You’ve completed all lessons in this course.</p>
            <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition shadow">
              🎓 Download Certificate
            </button>
          </div>
        ) : (
          <div className="text-gray-500 p-6 border-2 border-dashed rounded-lg inline-block mt-4">
            🎓 Complete all videos to unlock your certificate.
          </div>
        )}
      </div>
    </div>
  );
};

export default WebDev;
