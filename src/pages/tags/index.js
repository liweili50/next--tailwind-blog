import Link from "next/link";
import { useQuery } from "react-query";
import { getTagList } from "../../api/post";
import { useTitle } from "react-use";

function Tags() {
  const { data, isLoading } = useQuery("tags", getTagList);
  useTitle("标签");
  return (
    isLoading === false && (
      <div className="bg-base-100 p-5 lg:p-10">
        <h4 className="text-2xl text-center mb-8">
          目前共计 {data.data.length} 个标签
        </h4>
        <div className="flex flex-wrap justify-start items-center	">
          {data.data.map((tag) => (
            <Link href={"/tag/" + tag._id} key={tag._id}>
              <a className="tag">
                {tag._id}
              </a>
            </Link>
          ))}
        </div>
      </div>
    )
  );
}

export default Tags;
