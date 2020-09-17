import React from "react";
import { useHistory } from "react-router-dom";
import { LoginBg } from "../../assets";
import { Gap, Link } from "../../components";
import './detailBlog.scss';

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, suscipit repellat itaque beatae amet maiores. Vel culpa dicta, dignissimos consequatur, distinctio fuga, natus perferendis ea provident dolorum at fugit accusantium? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, suscipit repellat itaque beatae amet maiores. Vel culpa dicta, dignissimos consequatur, distinctio fuga, natus perferendis ea provident dolorum at fugit accusantium?</p>
      <Gap height={20}/>
      <Link title="Kembali" onClick={() => history.push('/home')}/>
    </div>
  );
};

export default DetailBlog;