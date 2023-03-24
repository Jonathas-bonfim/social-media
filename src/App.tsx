import { Header } from './components/header/Header';
import { Post } from './components/post/Post';
import { Sidebar } from './components/sidebar/Sidebar';

import styles from './style/App.module.scss';

import './style/global.scss'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/jonathas-bonfim.png',
      name: 'Jônathas Bonfim',
      role: 'Front-end Developer'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Saaaaaaaalve pessu'
      },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      },
      {
        type: 'link',
        content: 'Acesse no github.com/jonathas-bonfim'
      },
    ],
    PublishAt: new Date('2022-03-24 15:33:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/jonathas-bonfim.png',
      name: 'Deisy Bonfim',
      role: 'Arquiteta'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Olá pessoal'
      },
      {
        type: 'paragraph',
        content: 'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet'
      },
      {
        type: 'link',
        content: 'Acesse o projeto em @dbArquiteta'
      },
    ],
    PublishAt: new Date('2022-03-27 15:33:00')
  }
]


function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  author={post.author}
                  content={post.content}
                  PublishAt={post.PublishAt}
                />
              )
            })
          }
        </main>
      </div>
    </>
  )
}

export default App
