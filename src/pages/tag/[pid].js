import { useState, useEffect } from "react";
import Link from "next/link";
import dayjs from "dayjs";
import { useRouter } from "next/router";

// import "./index.css";
import { getPostsByTag } from "../../api/post";

const ArticleList = function ({ list }) {
  const listItems = list.map((article) => (
    <li key={article._id}>
      <span className="icon">
        <i className="czs-square-o" aria-hidden="true" />
      </span>
      <Link href={"/post/" + article._id}>
        <span>
          <span className="time">
            {dayjs(article.createTime).format("YYYY-MM-DD HH:mm:ss")}
          </span>
          {article.title}
        </span>
      </Link>
    </li>
  ));
  return <>{listItems}</>;
};

const Tag = function () {
  const [list, setList] = useState([]);
  const router = useRouter();
  const { pid } = router.query;
  console.log(pid)
  useEffect(() => {
    const handleGetArticleList = function () {
      getPostsByTag({ tag: pid }).then((res) => {
        setList(res.data);
      });
    };
    handleGetArticleList();
  }, []);
  return (
    <div className="p-5 lg:p-10 bg-base-100">
      <h5 className="text-2xl">{router.query.pid}</h5>
      <ul className="article-list">
        {list.length > 0 && <ArticleList list={list} />}
      </ul>
    </div>
  );
};
export default Tag;
