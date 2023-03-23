import styles from './Post.module.scss'

type PostProps = {
  author: string,
  content: string
}

export function Post({ author, content }: PostProps) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/jonathas-bonfim.png" alt="Avatar"
          />
          <div className={styles.authorInfo}>
            <strong>Jônathas Bonfim</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="23 de Março às 8:15h" dateTime='2023-03-23 08:00:00'>Publicado a 30 minutos</time>
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


    </article>
  )
}