'use client';

import { useState } from 'react';

type Comment = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export default function CommentSection({ blogId }: { blogId: string }) {
  console.log('Blog ID:', blogId); // Use it to satisfy lint while keeping the prop for future use

  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Alex Rivera', text: 'This was incredibly insightful! I never thought about the ethical implications of AI in this specific way.', date: '2 days ago' },
    { id: 2, author: 'Sarah Chen', text: 'Great breakdown of the current trends. Looking forward to more content like this.', date: '1 day ago' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    
    const comment: Comment = {
      id: Date.now(),
      author: 'You',
      text: newComment,
      date: 'Just now',
    };
    
    setComments([comment, ...comments]);
    setNewComment('');
  };

  return (
    <div className="space-y-12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full h-32 px-4 py-3 rounded-xl border border-[var(--accents-2)] bg-[var(--background)] focus:border-[var(--stripe-blue)] focus:ring-1 focus:ring-[var(--stripe-blue)] outline-none transition-all resize-none"
        />
        <div className="flex justify-end">
          <button type="submit" className="button-primary">
            Post Comment
          </button>
        </div>
      </form>

      <div className="space-y-8">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--stripe-blue)] to-[var(--stripe-purple)] flex-shrink-0" />
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <span className="font-bold text-sm">{comment.author}</span>
                <span className="text-xs text-[var(--accents-4)]">{comment.date}</span>
              </div>
              <p className="text-[var(--accents-6)] leading-relaxed">
                {comment.text}
              </p>
              <div className="mt-3 flex gap-4 text-xs font-bold text-[var(--accents-4)] uppercase tracking-widest">
                <button className="hover:text-[var(--stripe-blue)] transition-colors">Reply</button>
                <button className="hover:text-[var(--stripe-blue)] transition-colors">Like</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
