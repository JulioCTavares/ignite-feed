import { Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { ThumbsUp } from "@phosphor-icons/react/dist/ssr";
import Avatar from "./Avatar";

const Comment = () => {
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

            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir <span>24</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Comment;
