import React from 'react';
import { useAddReactionMutation } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '💓',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  const [addReaction] = useAddReactionMutation();

  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button
        key={name}
        type='button'
        className='reactionButton'
        onClick={() => {
          const newValue = post.reaction[name] + 1;
          addReaction({
            postId: post.id,
            reaction: { ...post.reaction, [name]: newValue },
          });
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div> {reactionButtons} </div>;
};

export default ReactionButtons;
