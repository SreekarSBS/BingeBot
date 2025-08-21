
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = () => {
    const currentMovie = useSelector((store) => store.movies?.currentMovie);
    useGetMovieTrailer(currentMovie)
    const videoKey = useSelector((store) => store.movies?.videoKey);
  
    if (!videoKey) return <div className="aspect-video bg-black">Hello</div>; // placeholder

  return (
   <div className="aspect-video h-full w-screen ">
      <iframe
        className=" h-full w-full absolute md:-mt-[100px]  "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&mute=1`}
        title="YouTube video player"
        
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe></div>
    
  );
};

export default VideoBackground;
