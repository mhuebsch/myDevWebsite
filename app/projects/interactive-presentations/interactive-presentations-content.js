'use client';

import { useState, useRef } from 'react';

const InteractivePresentationsPage = () => {
  const videos = [
    {
      id: 1,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 2,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 3,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 4,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 5,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 6,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 7,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 8,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
    {
      id: 9,
      screenshot: '/images/desktop-believe-in-better.png',
      video: '/videos/gameday-technologies-menu.mp4',
    },
  ];

  const [fullscreenVideo, setFullscreenVideo] = useState(null);
  const fullscreenRef = useRef();

  const handleFullscreen = (videoSrc) => {
    setFullscreenVideo(videoSrc);
    fullscreenRef.current?.requestFullscreen();
  };

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    video?.play();
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    video?.pause();
    video.currentTime = 0; // Reset video to the start
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen max-w-full sm:max-w-[70%] lg:max-w-[1400px] mx-auto">
      <div className="min-h-screen w-full">
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-4xl text-center font-semibold animate-fade-in lowercase text-green-300 pt-24 sm:py-16">
            Interactive Presentations
          </h1>
          <p className="w-full px-8 sm:px-0 sm:w-3/5 text-center py-4">
            These presentations were built in the Digideck, Sportsdigita's
            flagship application, using JavaScript, jQuery, HTML, CSS, and
            Bootstrap.
          </p>
        </div>

        <div className="mt-6 mb-12 flex items-center justify-center">
          <div className="pb-16 grid grid-cols-3 gap-4 max-w-screen-xl w-full">
            {videos.map((video) => (
              <div
                key={video.id}
                className="relative group w-full aspect-video bg-black overflow-hidden rounded-lg shadow-lg"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={video.screenshot}
                  alt={`Screenshot ${video.id}`}
                  className="absolute inset-0 object-cover w-full h-full group-hover:opacity-0 transition-opacity duration-300"
                />
                <video
                  src={video.video}
                  className="absolute inset-0 object-cover w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  loop
                  muted
                ></video>
                <button
                  className="absolute bottom-2 right-2 bg-white text-black px-3 py-1 text-sm font-semibold rounded shadow hover:bg-gray-200"
                  onClick={() => handleFullscreen(video.video)}
                >
                  Fullscreen
                </button>
              </div>
            ))}
          </div>
        </div>

        {fullscreenVideo && (
          <div
            ref={fullscreenRef}
            className="fixed inset-0 bg-black flex items-center justify-center z-50"
          >
            <video
              src={fullscreenVideo}
              className="w-full h-full"
              controls
              autoPlay
            ></video>
            <button
              className="absolute top-4 right-4 bg-white text-black px-4 py-2 text-sm font-semibold rounded shadow hover:bg-gray-200"
              onClick={() => setFullscreenVideo(null)}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InteractivePresentationsPage;
