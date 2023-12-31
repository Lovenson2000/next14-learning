import Image from "next/image";
import styles from "./singlePost.module.css";


function SinglePostPage() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=800" 
          fill 
          alt="" 
          className={styles.img}
        />

      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Blatter Beaucicot</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>23.12.23</span>
          </div>
          <div className={styles.content}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta ipsam consequuntur dignissimos voluptates iure nemo? Deleniti aperiam ut maiores excepturi nesciunt optio impedit assumenda deserunt eligendi.
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;