import { useSelector } from "react-redux";
import { API_OPTIONS, VIDEO_URL } from "../utils/constants";
import React, { useEffect, useState } from "react";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";


const VideoBackground = () => {
    
  const [trailerKey, setTrailerKey] = useState();
  useGetMovieTrailer(setTrailerKey);
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${trailerKey}?si=OD4hXI5wdCNsC6V1`}
        title="YouTube video player"
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
