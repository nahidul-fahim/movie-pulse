import { Link, useLocation } from "react-router-dom";
import { IoIosHome } from "react-icons/io";
import { FaStar } from "react-icons/fa6";
import { useRef, useState } from "react";
import { Toaster, toast } from "sonner";



const MovieDetails = () => {

    //hooks and custom hooks
    const location = useLocation();
    const movieDetails = location?.state?.show;
    console.log(movieDetails)
    const [form, setForm] = useState(false);
    const bookingForm = useRef(null);




    // handle Form submit
    const handleFormSubmit = e => {
        e.preventDefault();
        const movieName = movieDetails?.name;
        const userName = e.target.userName.value;
        const userEmail = e.target.userEmail.value;
        const userPhone = e.target.userPhone.value;
        const address = e.target.address.value;
        const ticketDetails = [movieName, userName, userEmail, userPhone, address]
        localStorage.setItem("ticket-details", ticketDetails);
        bookingForm.current.reset();
        setForm(false);
        toast.success('Ticket confirmed!');
    }



    return (
        <div className={`movie-details-parent ${form ? "form-active-parent" : ""}`}>

            <Toaster />

            <Link to={"/"} className="back-to-home-link"><button className="back-to-home-btn"><IoIosHome /> Back To Home</button></Link>

            {/* movie poster */}
            <div>
                <img src={movieDetails?.image?.original} alt="" className="detail-poster" />
            </div>

            {/* movie details */}
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

                <button onClick={() => setForm(!form)} className="link-button">Book Ticket</button>
            </div>



            {/* ticket booking form */}
            <div className={`${form ? "active-booking-form" : "booking-form"}`}>
                <button className="close-button" onClick={() => setForm(!form)}>Close</button>

                <form onSubmit={handleFormSubmit} className="booking-form-inputs" ref={bookingForm}>
                    <input type="text" className="form-input" readOnly defaultValue={movieDetails?.name} />
                    <input required type="text" name="userName" id="userName" className="form-input" placeholder={"Enter your name"} />
                    <input required type="email" name="userEmail" id="userEmail" className="form-input" placeholder={"Enter your email"} />
                    <input required type="tel" name="userPhone" id="userPhone" className="form-input" placeholder={"Enter your phone"} />
                    <textarea required name="address" id="address" className="form-input" placeholder="Enter your address"></textarea>
                    <input type="submit" value={"Confirm Booking"} className="link-button" />
                </form>


            </div>

        </div>
    );
};

export default MovieDetails;