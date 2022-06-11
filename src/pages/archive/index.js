import Link from "next/link";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { getArchiveList } from "../../api/post";
// import "./index.css";

function Archive() {
  const { data, isLoading } = useQuery("archive", getArchiveList);
  return (
    isLoading === false && (
      <ul className="archive-content p-5 lg:p-10 bg-base-100">
        {data.data.map((archive) => (
          <li key={archive._id}>
            <h5 className="is-size-4 has-text-weight-normal">
              {archive.category}年
            </h5>
            <ul className="archive-list">
              {archive.list.map((item) => (
                <li key={item.id}>
                  <span className="icon">
                    <i className="czs-square-o" aria-hidden="true" />
                  </span>
                  <Link href={"post/" + item.id} className="has-text-link-dark">
                    <span>
                      <span className="time">
                        {dayjs(item.createTime).format("YYYY-MM-DD")}
                      </span>
                      {item.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    )
  );
}

export default Archive;
