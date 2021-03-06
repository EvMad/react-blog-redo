import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_POSTS } from "../Utils/queries";
import auth from "../Utils/auth";
import './css/explore.css';

//import images fonts and icons here?

//library.add icons

const Explore = () => {
    const { loading, data } = useQuery(QUERY_POSTS, {
        fetchPolicy: "no-cache",
    });

    const postList = data?.posts || [];
    console.log(postList);

    //return ( <div> )

    return (
        <section className="grid">
                <aside className="aspect-ratio"></aside>
        {loading ? (
            <div>Loading...</div>
        ) : (
            
            <article>
                
               <ul className="grid absolute-fill">

               {postList.map((post) => {
                   return (
                    
                    <li key={post._id} className="aspect-ratio">
                        <div className="absolute-fill">
                            <h2 className="postTitle">{post.postTitle}</h2>
                            <div className="image"><img></img></div>
                            <Link to={{ pathname: `/post/${post._id}` }}>Read More</Link>
                        </div>
                    </li>
                
                   )
               })}

               </ul>

            </article>
        )}

        </section>
    )

};

export default Explore;