import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';

import styles from './style/App.module.scss';

import './style/global.scss'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author='Jônathas Bonfim'
            content='Jonathas Desenvolvedor de Frontend'
          />
          <Post
            author='Macarrão'
            content='Lutador de jiujitsu'
          />
        </main>
      </div>
    </>
  )
}

export default App
