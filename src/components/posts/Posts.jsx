import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityItem, Icon } from '@fluentui/react';
import { initializeIcons } from '@fluentui/react/lib/Icons';
import { DefaultButton } from '@fluentui/react/lib/Button';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/posts';
import { deletePost } from '../../redusers/postsReduser';

const Posts = () => {
  initializeIcons();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <ActivityItem
            comments={post.body}
            activityDescription={(
              <>
                <Link>{post.userId}</Link>
                {' '}
                {post.title}
              </>
)}
          />
          <DefaultButton
            class="ms-Icon ms-Icon--RecycleBin"
            aria-hidden="true"
            onClick={() => dispatch(deletePost(post.id))}
            allowDisabledFocus
            text={<Icon iconName="Trash" />}
          />
        </div>
      ))}
    </div>
  );
};

export default Posts;
