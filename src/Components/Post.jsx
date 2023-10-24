import { format, formatDistanceToNow } from "date-fns";
import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";
import ptBR from "date-fns/locale/pt-BR";

const Post = ({ author, publishedAt, content }) => {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedDateRelative = formatDistanceToNow(publishedAt, {
    addSuffix: true,
    locale: ptBR,
  });

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
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form className={styles.commentArea}>
        <strong> Deixe seu comentário</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit"> Comentar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
};

export default Post;
