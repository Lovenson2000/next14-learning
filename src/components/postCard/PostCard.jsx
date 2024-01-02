import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({post}) => {

  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>  
            <Image src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" fill className={styles.img} />
            <span className={styles.date}>31.12.2023</span>  
            </div>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.body}</p>
            <Link className={styles.link} href={`blog/${post.id}`}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard;