import { useState } from 'react';
import { ThumbsUp, MessageCircle, Share2, MoreHorizontal, Heart } from 'lucide-react';
import { Post } from '../../types';
import { relationshipPostComments } from '../../data/commentsData';

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  const [showComments, setShowComments] = useState(false);
  const isRelationshipPost = post.type === 'relationship';
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 mb-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <img
            src={post.user.avatar}
            alt={post.user.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{post.user.name}</p>
            <p className="text-xs text-fb-dark-gray">{post.time}</p>
          </div>
        </div>
        <button
          className="w-9 h-9 rounded-full hover:bg-fb-gray flex items-center justify-center transition-colors"
          aria-label="More options"
        >
          <MoreHorizontal className="w-5 h-5 text-fb-dark-gray" />
        </button>
      </div>

      {/* Caption - Special format for relationship posts */}
      {isRelationshipPost ? (
        <div className="mb-3 text-center py-4">
          <Heart className="w-12 h-12 text-fb-blue mx-auto mb-3" fill="currentColor" />
          <p className="text-lg font-semibold text-black mb-1">In a Relationship</p>
          <p className="text-base text-black mb-1">With {post.relationshipWith}</p>
          <p className="text-xs text-fb-dark-gray">{post.time}</p>
        </div>
      ) : (
        <>
          <p className="text-sm mb-3">{post.caption}</p>
          {/* Image - Only show for non-relationship posts */}
          <div className="rounded-lg overflow-hidden mb-3 flex justify-center">
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-auto object-cover max-h-[500px] [&[style*='aspect-ratio']]:max-w-md [&[style*='aspect-ratio']]:mx-auto"
              style={{ maxWidth: '100%' }}
              onLoad={(e) => {
                const img = e.currentTarget;
                const aspectRatio = img.naturalWidth / img.naturalHeight;
                // If portrait (height > width), limit width
                if (aspectRatio < 1) {
                  img.style.maxWidth = '400px';
                  img.style.marginLeft = 'auto';
                  img.style.marginRight = 'auto';
                }
              }}
            />
          </div>
        </>
      )}

      {/* Stats */}
      <div className="flex items-center justify-between text-xs text-fb-dark-gray mb-2 pb-2 border-b border-gray-200">
        <div className="flex items-center gap-1">
          <ThumbsUp className="w-4 h-4 text-fb-blue" />
          <span>{post.likes}</span>
        </div>
        <div>
          <span>{post.comments} comments</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-around pt-2">
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center">
          <ThumbsUp className="w-5 h-5" />
          <span>Like</span>
        </button>
        <button 
          onClick={() => setShowComments(!showComments)}
          className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Comment</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 hover:bg-fb-gray rounded-lg transition-colors text-sm text-fb-dark-gray font-medium flex-1 justify-center">
          <Share2 className="w-5 h-5" />
          <span>Share</span>
        </button>
      </div>

      {/* Comments Section */}
      {showComments && isRelationshipPost && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="max-h-96 overflow-y-auto space-y-3 pr-2 scroll-smooth">
            {relationshipPostComments.map((comment) => (
              <div key={comment.id} className="flex items-start gap-2">
                <img
                  src={comment.user.avatar}
                  alt={comment.user.name}
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-1 bg-fb-gray rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold text-sm text-black">{comment.user.name}</p>
                    <p className="text-xs text-fb-dark-gray">{comment.time}</p>
                  </div>
                  <p className="text-sm text-black">{comment.text}</p>
                  {comment.likes && comment.likes > 0 && (
                    <div className="flex items-center gap-1 mt-1">
                      <ThumbsUp className="w-3 h-3 text-fb-blue" />
                      <span className="text-xs text-fb-dark-gray">{comment.likes}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;
