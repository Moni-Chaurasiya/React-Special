import { useState, useEffect } from "react";
import { Container, PostCard } from "..";
import service from "../../appwrite/conf";
function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  service.getPosts([]).then((posts) => {
    if (posts) {
      setPosts(posts.documents);
    }
  });

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap gap-16">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 w-1">
              <PostCard
                $id={post.$id}
                title={post.title}
                featuredImg={post.featuredImg}
                {...post}
              />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
export default AllPosts;
