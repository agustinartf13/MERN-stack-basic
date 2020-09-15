import React from 'react'
import { BlogItem, Button, Gap } from '../../components'
import './home.scss';

const Home = () => {
    return (
        <div className="home-page-wrapper">
            <div className="create-wrapper">
                <Button title="Create Blog"/>
            </div>
            <Gap height={20}/>
           <div className="content-wrapper">
               <BlogItem></BlogItem>
               <BlogItem></BlogItem>
               <BlogItem></BlogItem>
               <BlogItem></BlogItem>
           </div>
        </div>
    )
}

export default Home