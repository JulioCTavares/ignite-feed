import { format, formatDistanceToNow } from "date-fns";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import ptBR from "date-fns/locale/pt-BR";
import { useState } from "react";

const Post = ({ author, publishedAt, content }) => {
  const [comments, setComments] = useState(["Belo post!"]);

  const [newComment, setNewComment] = useState("");

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    setComments([...comments, newComment]);
    setNewComment("");
  };

  const handleNewCommentChange = () => {
    setNewComment(event.target.value);
  };

  const deleteComment = (commentToDelete) => {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(commentsWithoutDeleteOne);
  };

  const handleInvalidComment = () => {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }

  const isEmptyComment = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header className={styles.container}>
        <div className={styles.author}>
          <Avatar imgUrl={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelative}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={line.content}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentArea}>
        <strong> Deixe seu comentário</strong>

        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleInvalidComment}
          required
        />

        <footer>
          <button type="submit" disabled={isEmptyComment}> 
          Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              onDeleteComment={deleteComment}
              content={comment}
            />
          );
        })}
      </div>
    </article>
  );
};

export default Post;
