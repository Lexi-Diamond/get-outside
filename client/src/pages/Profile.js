import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import AddPost from '../components/Addpost';
import PostList from '../components/PostList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4 style={{ margin: 100, fontSize: '2rem' }}>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
    <div>

      <div >
        {/* <h2 style={{ textAlign: 'center', margin: '2rem' }}>
          Viewing {userParam ? `${user.username}'s` : 'your'} profile
        </h2> */}
        <AddPost />
        <div className="col-12 col-md-10 mb-5">
          <PostList
            posts={user.posts}
            title={`${user.username}'s posts`}
            showTitle={true}
            showUsername={true}
          />
        </div>

        {!userParam && (
          <div
            style={{ border: '2px solid #ff5e62' }}
          >
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
