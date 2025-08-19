
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = () => {
    const currentMovie = useSelector((store) => store.movies?.currentMovie);
    useGetMovieTrailer(currentMovie)
    const videoKey = useSelector((store) => store.movies?.videoKey);
  
    if (!videoKey) return <div className="aspect-video bg-black">Hello</div>; // placeholder

  return (
   
      <iframe
        className="aspect-video"
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video player"
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    
  );
};

export default VideoBackground;
