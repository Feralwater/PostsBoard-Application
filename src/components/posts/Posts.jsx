import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityItem, Icon } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/posts';
import { deletePost } from '../../redusers/postsReduser';
import './Posts.css';

const Posts = () => {
  initializeIcons();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  // const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    if (fetching) {
      dispatch(getPosts());
    }
  }, [dispatch, fetching]);
  const scrollHandler = (event) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
      setFetching(true);
    }
  };
  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  return (
    <>
      {posts.map((post) => (
        <div className="post-container" key={post.id}>
          <ActivityItem
            className="post-item"
            comments={post.body}
            activityDescription={(
              <>
                <Link to="/">{post.userId}</Link>
                {' '}
                {post.title}
              </>
            )}
          />
          <DefaultButton
            className="delete-button"
            aria-hidden="true"
            onClick={() => dispatch(deletePost(post.id))}
            allowDisabledFocus
            text={<Icon iconName="Trash" />}
          />
        </div>
      ))}
    </>
  );
};

export default Posts;
