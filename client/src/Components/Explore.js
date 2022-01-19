import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../Utils/queries";
import auth from "../Utils/auth";

//import images fonts and icons here?

//library.add icons

const Explore = () => {
    const { loading, data } = useQuery(QUERY_POSTS, {
        fetchPolicy: "no-cache",
    });

    const postList = data?.posts || [];
    console.log(postList);

    //return ( <div> )

};

//export default Explore;