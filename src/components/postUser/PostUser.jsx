import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

async function PostUser({userId}) {

    const user = await getUser(userId);

    return (
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}

export default PostUser;