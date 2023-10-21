import Avatar from "./Avatar";
import Comment from "./Comment";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <article className={styles.post}>
      <header className={styles.container}>
        <div className={styles.author}>
          <Avatar imgUrl="https://avatars.githubusercontent.com/u/54952260?v=4" />
          <div className={styles.authorInfo}>
            <strong>Julio Tavares</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Outubro às 14:30" dateTime="2023-16-10 14:30:44">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>

        <p>
          {" "}
          <a href="">👉 jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
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
