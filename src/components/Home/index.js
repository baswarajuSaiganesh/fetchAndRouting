import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div>
      <UserInfo />
    </div>
    <div>
      <BlogList />
    </div>
  </div>
)

export default Home
