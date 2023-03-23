import style from './Avatar.module.scss';

type AvatarProps = {
  src: string
  hasBorder?: boolean
}

export function Avatar({ src, hasBorder = true }: AvatarProps) {
  return (
    <img
      className={hasBorder ? style.avatarWithBorder : style.avatar}
      src={src}
      alt="Avatar"
    />
  )
}