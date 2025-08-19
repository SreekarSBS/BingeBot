
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackground = () => {
    useGetMovieTrailer()
    const videoKey = useSelector((store) => store.movies?.videoKey);
  

  return (
    <div className="">
      <iframe
        className="aspect-video  "
        src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
        title="YouTube video player"
     
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
