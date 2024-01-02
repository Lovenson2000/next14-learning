import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import { Suspense } from "react";
import styles from "./singlePost.module.css";

async function getData(slug) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!response.ok) {
    throw new Error("Something went wrong")
  }
  return response.json();

}

async function SinglePostPage({ params }) {
  const { slug } = params;
  const post = await getData(slug);

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
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/1820919/pexels-photo-1820919.jpeg?auto=compress&cs=tinysrgb&w=800"
            width={50}
            height={50}
            alt=""
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>23.12.23</span>
          </div>
          <div className={styles.content}>
            {post.body}
          </div>

        </div>
      </div>
    </div>
  )
}

export default SinglePostPage;