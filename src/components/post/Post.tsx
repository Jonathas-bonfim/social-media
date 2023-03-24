import { Avatar } from '../Avatar/Avatar'
import { Comment } from '../Comment/Comment'
import styles from './Post.module.scss'

type AuthorProps = {
  avatarUrl: string,
  name: string,
  role: string
}

type ContentProps = {
  type: string,
  content: string
}

type PostProps = {
  author: AuthorProps,
  content: {
    type: string,
    content: string
  }[]
  PublishAt: Date
}

export function Post({ author, content, PublishAt }: PostProps) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pb-BR', {
    day: '2-digit',
    month: 'long',
    timeStyle: 'full'
  })

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            src="https://github.com/jonathas-bonfim.png"
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title="23 de Março às 8:15h" dateTime='2023-03-23 08:00:00'>Há 2 horas atrás</time>
      </header>

      <div className={styles.content}>
        <p>Olá pessoal, espero que estejam bem</p>
        <p>Desenvolvi a aplicação social media, é um feed de rede social com vários posts, irei deixar o link do repositório com mais informações</p>
        <p><a href="#">https://github.com/Jonathas-bonfim/social-media</a></p>
        <p>
          <a href="">#dev</a>{' '}
          <a href="">#frontend</a>{' '}
          <a href="">#github</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}