import { Link, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaStar } from "react-icons/fa6";



const MovieDetails = () => {

    //hooks and custom hooks
    const location = useLocation();
    const movieDetails = location?.state?.show;
    console.log(movieDetails)



    return (
        <div className="movie-details-parent">

            <Link to={"/"} className="back-to-home-link"><button className="back-to-home-btn"><IoIosHome /> Back To Home</button></Link>

            <div>
                <img src={movieDetails?.image?.original} alt="" className="detail-poster" />
            </div>

            <div className="details-div">
                <h2 className="card-heading">{movieDetails?.name}</h2>
                <p>{movieDetails?.summary}</p>
                <p className="bold-text">Rating: {movieDetails?.rating?.average || "N/A"} <FaStar /></p>
                <p className="bold-text">Schedule: {movieDetails?.schedule?.days}, {movieDetails?.schedule?.time}</p>
                <p className="bold-text">
                    Genres:
                    <span className="flex-div">
                        {
                            movieDetails.genres.map((genre, index) =>
                                <p key={index} className="single-genre">{genre}</p>)
                        }
                    </span>
                </p>
                <p className="bold-text">Language: {movieDetails?.language}</p>
                <p className="bold-text">Runtime: {movieDetails?.runtime || "N/A"} min</p>

                <Link to={"/movieDetails"} style={{ width: "100%" }}><button className="link-button">Book Ticket</button></Link>
            </div>



            {/* form */}
            <div>
                
            </div>

        </div>
    );
};

export default MovieDetails;