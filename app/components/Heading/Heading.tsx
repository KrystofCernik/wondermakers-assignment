import styles from './Heading.module.scss'

export default function Heading({ title }: { title: string }) {
  return (
    <div className="container mx-auto z-[2]">
      <h1 className={styles.heading}>{title}</h1>
    </div>
  )
}
