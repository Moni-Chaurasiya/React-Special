import PropTypes from "prop-types";
import service from "../appwrite/conf";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImg }) {
  console.log("Featured Image ID:", featuredImg); // Add this line

  return (
    <Link to={`/post/${$id}`} className="post-card">
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={
              featuredImg
                ? service.getFilePreview(featuredImg)
                : "default-image-url"
            }
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

PostCard.propTypes = {
  $id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  featuredImg: PropTypes.string.isRequired,
};

export default PostCard;
