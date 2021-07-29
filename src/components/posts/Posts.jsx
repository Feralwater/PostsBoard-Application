import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityItem, Icon } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { getPosts } from '../../actions/posts';
import { deletePost } from '../../redusers/postsReduser';
import './Posts.css';

const Posts = () => {
  initializeIcons();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  // const [currentPage, setCurrentPage] = useState(1);
  const [showMessage, setShowMessage] = useState(false);
  const [postId, setPostId] = useState('');

  useEffect(() => {
    dispatch(getPosts());
    // setCurrentPage((prevState) => prevState + 1);
  }, [dispatch]);
  const scrollHandler = (event) => {
    if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 100) {
      console.log('');
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
      <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="alert"
        unmountOnExit
      >
        <div className="alert-container">
          <p className="alert-message">
            Are you sure you want to delete the message?
          </p>
          <div className="buttons-container">
            <button
              type="button"
              onClick={() => setShowMessage(false)}
              className="cancel-button"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={() => {
                setShowMessage(false);
                dispatch(deletePost(postId));
              }}
              className="danger-button"
            >
              Delete
            </button>
          </div>
        </div>
      </CSSTransition>
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
            onClick={() => {
              setShowMessage(true);
              setPostId(post.id);
            }}
            allowDisabledFocus
            text={<Icon iconName="Trash" />}
          />
        </div>
      ))}
    </>
  );
};

export default Posts;
