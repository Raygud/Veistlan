import React, { useEffect, useState } from "react";

export default function Posts() {
    const [Posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        const response = await fetch("http://localhost:3001/api/posts")
        const data = await response.json();
        console.log(data);
        setPosts(data)
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    return (<>
        {Posts.map((Post) => (
            img
        ))}
    </>)
}