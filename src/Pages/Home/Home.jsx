import useMovieData from "../../Hooks/useMovieData/useMovieData";
import { MdOutlineWatchLater } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Home = () => {


    // get data from custom hook
    const { isPending, data } = useMovieData();



    if (isPending) {
        return <p>Loading...</p>
    }


    return (
        <div className="parent-grid">
            {
                data.map((singleShow, index) =>
                    <div key={index} className="movie-card">
                        <img key={index} src={singleShow?.show?.image?.medium} alt="" className="movie-poster" />
                        <div className="runtime-parent">
                            <MdOutlineWatchLater />
                            <p>{singleShow?.show?.runtime || "-"} min</p>
                        </div>
                        <div className="genre-parent">
                            {singleShow?.show?.genres.map((genre, index) =>
                                <p key={index} className="single-genre">{genre}</p>)}
                        </div>
                        <div className="heading-div">
                            <h3 className="card-heading">{singleShow?.show.name}</h3>
                            {
                                singleShow?.show?.rating?.average ?
                                    <p className="rating">{singleShow?.show?.rating?.average}<FaStar /></p> : ""
                            }
                        </div>
                        <Link style={{width: "100%"}}><button className="link-button">See Details</button></Link>
                    </div>
                )
            }
        </div>
    );
};

export default Home;