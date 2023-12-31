
import PostCard from "@/components/postCard/PostCard";
import styles from "./blog.module.css";
function BlogPage() {
  return (
    <div className={styles.container}>
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  )
}

export default BlogPage;