// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blogItemDetails} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails

  return (
    <Link to={`/blogs/${id}`} className="blog-item-link">
      <li>
        <div className="blog-item-container">
          <img className="topic-image" src={imageUrl} alt={`item${id}`} />
          <div className="description">
            <p className="name">{topic}</p>
            <h1 className="title">{title}</h1>
            <div>
              <img
                className="author-image"
                src={avatarUrl}
                alt={`avatar${id}`}
              />
              <p className="name">{author}</p>
            </div>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
