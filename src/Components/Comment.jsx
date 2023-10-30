import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import Avatar from "./Avatar";
import { useState } from "react";

const Comment = ({ content, onDeleteComment }) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleDeleteComment = () => {
    onDeleteComment(content);
  };

  const handleLikeCount = () => {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} imgUrl="https://github.com/juliocTavares.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>João Pessoa</strong>
              <time
                title="16 de Outubro às 14:30"
                dateTime="2023-16-10 14:30:44"
              >
                Cerca de 40min atrás
              </time>
            </div>

            <button title="Deletar comentario" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeCount}>
            <ThumbsUp size={20} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
