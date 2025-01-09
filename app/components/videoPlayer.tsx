'use client';

import { useRef, useEffect } from 'react';

const VideoComponent = ({ src, ...props }) => {
  const videoRef = useRef<HTMLVideoElement>(null); // Video ref to control the video element

  useEffect(() => {
    const videoElement = videoRef.current;

    // Ensuring the video plays on load and loops
    if (videoElement) {
      videoElement.play(); // Automatically play video
    }
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{ width: '100%', height: 'auto' }}
      {...props} // Pass additional props if needed
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoComponent;
