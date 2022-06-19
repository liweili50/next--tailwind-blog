import Link from "next/link";
import { useQuery } from "react-query";
import dayjs from "dayjs";
import { getArchiveList } from "../../api/post";
import { useTitle } from "react-use";

function Archive() {
  const { data, isLoading } = useQuery("archive", getArchiveList);
  useTitle("归档");
  return (
    isLoading === false && (
      <ul className="p-5 lg:p-10 bg-base-100">
        {data.data.map((archive) => (
          <li key={archive._id}>
            <h1 className="">{archive.category}年</h1>
            <ul className="archive-list">
              {archive.list.map((item) => (
                <li key={item.id} className="my-4 cursor-pointer">
                  <span className="icon text-sm">
                    <i className="czs-square-o" aria-hidden="true" />
                  </span>
                  <Link href={"post/" + item.id} className="has-text-link-dark">
                    <span>
                      <span className="px-4">
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
