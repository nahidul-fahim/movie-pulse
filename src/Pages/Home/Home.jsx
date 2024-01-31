import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const Home = () => {


    const { isPending, data } = useQuery({
        queryKey: ["all-movies"],
        queryFn: async () => {
            const res = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            return res.data;
        }
    })


    return (
        <div>
            <h2 className="bg-danger fs-1 display-1">Home page</h2>
        </div>
    );
};

export default Home;