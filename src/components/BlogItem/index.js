// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails

  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item-link">
        <div className="blog-item-container">
          <img className="topic-image" src={imageUrl} alt={topic} />
          <div className="description">
            <p className="name">{topic}</p>
            <h1 className="title">{title}</h1>
            <div>
              <img className="author-image" src={avatarUrl} alt={author} />
              <p className="name">{author}</p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
