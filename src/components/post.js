import dayjs from "dayjs";
import Link from "next/link";

function Post(props) {
  const tagItems = props.post.tags?.map((tag, index) => (
    <Link href={"/tag/" + tag} key={index} className="tag">
      <a> #{tag}</a>
    </Link>
    // <span>{tag}</span>
  ));
  return (
    <div className="p-6 bg-base-100">
      <h4 className="text-2xl">{props.post.title}</h4>
      <p className="text-gray-700">
        {dayjs(props.post.createTime).format("YYYY-MM-DD HH:mm:ss")}
      </p>
      <div className="py-4">
        {props.post.description || props.post.excerpt}
      </div>
      <Link href={"post/" + props.post._id}>
        <button class="btn btn-primary btn-sm">查看全文</button>
      </Link>
      {/* <hr className="hr py-4" /> */}
      <div class="divider"></div> 
      <div className="tags text-right">{tagItems}</div>
    </div>
  );
}

export default Post;
