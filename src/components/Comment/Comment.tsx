import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.scss';

export function Comment() {
  return (
    <div className={style.comment}>
      <div className={style.container}>
        <img src="https://github.com/jonathas-bonfim.png" alt="Avatar" />
        <div className={style.commentBox}>
          <div className={style.commentContent}>
            <header>
              <div className={style.authorAndTime}>
                <strong>Jônathas Bonfim</strong>
                <time title="23 de Março às 8:15h" dateTime='2023-03-23 08:00:00'>Cerca de 1h atrás</time>
              </div>

              <button title='Deletar Comentário'>
                <Trash size={24} />
              </button>
            </header>

            <p>Muito bom Jônathas, parabéns!</p>
          </div>
        </div>
      </div>

      <footer>
        <button>
          <ThumbsUp />
          Aplaudir
          <span>20</span>
        </button>
      </footer>
    </div>
  )
}