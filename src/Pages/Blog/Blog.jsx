import React from 'react';
import setTitle from '../../hooks/useTitle';

const Blog = () => {
    setTitle('Blog')
    return (
        <div>
            <h1>Blogs</h1>
        </div>
    );
};

export default Blog;