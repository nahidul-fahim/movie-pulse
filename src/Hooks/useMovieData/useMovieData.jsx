import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useMovieData = () => {


    const { isPending, data } = useQuery({
        queryKey: ["all-movies"],
        queryFn: async () => {
            const res = await axios.get("https://api.tvmaze.com/search/shows?q=all")
            return res.data;
        }
    })



    return { isPending, data }
};

export default useMovieData;