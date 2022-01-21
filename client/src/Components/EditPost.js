import React from 'react';

const EditPost = () => {

    const { postId } = useParams();

    const { loading, data } = useQuery({ variables: { postId: postId }});

    const singlePost = data?.singlePost || {};

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div></div>
    );
};

export default EditPost;