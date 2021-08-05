import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityItem, Icon } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ReactPaginate from 'react-paginate';
import { useHistory } from 'react-router';
import { getPosts } from '../../actions/posts';
import { ReactComponent as PrevArrow } from './svgImages/prevArrow.svg';
import { ReactComponent as NextArrow } from './svgImages/nextArrow.svg';
import { ReactComponent as BreakDots } from './svgImages/breakDots.svg';
import './Posts.css';
import { deletePost } from '../../redusers/postsReduser';

function animatedAlert(showMessage, setShowMessage, dispatch, postId) {
  return (
    <CSSTransition
      in={showMessage}
      timeout={300}
      className="modal-wrapper"
      classNames="alert"
      unmountOnExit
    >
      <div>
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
      </div>
    </CSSTransition>
  );
}

function pagination(pagesCount, handlePageClick, pageNumber) {
  return (
    <div className="pagination-wrapper">
      <ReactPaginate
        previousLabel={(
          <PrevArrow className="previous" />
        )}
        nextLabel={(
          <NextArrow className="next" />
        )}
        breakLabel={(
          <BreakDots className="break" />
        )}
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        pageClassName="pages"
        activeClassName="active"
        initialPage={pageNumber - 1}
        disableInitialCallback
      />
    </div>
  );
}

const Posts = ({ match: { params: { pageNumber = 1 } } }) => {
  const history = useHistory();
  initializeIcons();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const [showMessage, setShowMessage] = useState(false);
  const [postId, setPostId] = useState('');
  const totalCount = useSelector((state) => state.posts.totalCount);
  const pagesCount = Math.ceil(totalCount / 10);

  const handlePageClick = (currentPage) => {
    history.push(`/page/${currentPage.selected + 1}`);
  };

  useEffect(() => {
    dispatch(getPosts(pageNumber));
  }, [pageNumber]);

  return (
    <>
      {animatedAlert(showMessage, setShowMessage, dispatch, postId)}
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
      {pagination(pagesCount, handlePageClick, +pageNumber)}
    </>
  );
};

export default Posts;
