import styles from './App.module.css';
import Header from "./Components/Header";
import Post from './Components/Post';
import Sidebar from "./Components/Sidebar";

function App() {

  return (
    <>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post />
        <Post />
        <Post />
        <Post />
      </main>
     
     </div>
    </>
  )
}

export default App
