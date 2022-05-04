import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const postList = ({
  posts,
  title,
  showTitle = true
}) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3 className='blogTitle'>{title}</h3>}
      {posts &&
        posts.map((post) => (
          <><ul className="cards">
            <li>
              <Link
                className="card"
                to={`/posts/${post._id}`}
              >
                <img src="https://images.unsplash.com/photo-1533643593349-9106c11eb986?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8ZGFya3x8fHx8fDE2NTE2NDM5Mzc&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1200" className="card__image" alt="nature background" />
                <div className="card__overlay">
                  <div className="card__header">
                    <img className="card__thumb" src="https://bootcampspot.com/broker/studentAvatar?accountId=102745" alt="" />
                    <div className="card__header-text">
                      <h3 className="card__title">{post.postOwner}</h3>
                      <span className="card__status">{post.createdAt}</span>
                    </div>
                  </div>
                  <p className="card__description">{post.postText}</p>
                </div>
              </Link>
            </li>
          </ul>
          </>
        ))}
    </div>
  );
};

export default postList;


