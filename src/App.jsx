import Header from "./Components/Header";
import styles from './App.module.css';
import Sidebar from "./Components/Sidebar";

function App() {

  return (
    <>
      <Header />
     <div className={styles.wrapper}>
      <Sidebar />
      <main>
        Postsssss
      </main>
     </div>
    </>
  )
}

export default App
