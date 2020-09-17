import React from 'react';
import { useHistory } from 'react-router-dom';
import { RegisterBg } from '../../../assets';
import { Button, Gap } from '../../atoms';
import './blogItem.scss';

const BlogItem = () => {
    const history = useHistory();
    return (
        <div className="blog-item">
            <img className="image-thumb" src={RegisterBg} alt="img-blog"/>
            <div className="content-detail">
                <p className="title">Title Blog</p>
                <p className="author">Author</p>
                <p className="body">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates quas velit labore officiis, deleniti corrupti molestiae necessitatibus? Perspiciatis, expedita dolor! Inventore quas incidunt animi perferendis praesentium sunt maiores! Illum, harum!</p>
                <Gap height={20} />
                <Button title="View Detail" onClick={() => history.push('/detail-blog')}/>
            </div>
        </div>
        
    )
}

export default BlogItem