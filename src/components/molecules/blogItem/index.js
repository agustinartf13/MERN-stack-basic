import React from 'react';
import { RegisterBg } from '../../../assets';
import './blogItem.scss';

const BlogItem = () => {
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="img-blog"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author</p>
                <p className="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas velit labore officiis, deleniti corrupti molestiae necessitatibus? Perspiciatis, expedita dolor! Inventore quas incidunt animi perferendis praesentium sunt maiores! Illum, harum!</p>
            </div>
        </div>
        
    )
}

export default BlogItem