import { useEffect } from "react";

import { useInfiniteQuery } from "react-query";
import { useInView } from "react-intersection-observer";
import Card from "../../components/card";
import Post from "../../components/post";
import { getPostsList } from "../../api/post";
import { useTitle } from "react-use";


export default function Home({ Component, pageProps }) {
  // let keyword = new URLSearchParams(props.location.search).get("keyword");
  const {
    status,
    data,
    error,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    "posts",
    async (data) => {
      let pageParam = data.pageParam ?? 1;
      const res = await getPostsList({
        pageNum: pageParam,
        pageSize: 5,
      });
      return res.data;
    },
    {
      getNextPageParam: (lastPage) => {
        if (
          !lastPage ||
          lastPage.pageSize * lastPage.pageNum >= lastPage.total
        ) {
          return;
        }
        return lastPage.pageNum + 1;
      },
    }
  );
  const { ref, inView } = useInView({ threshold: 0 });
  useTitle('首页');
  useEffect(() => {
    if (hasNextPage && inView) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);
  return (
    <div className="grid grid-cols-8 lg:grid-cols-12 gap-4">
      <div className="col-span-8 ">
        {status === "loading" ? (
          <div className="column">Loading...</div>
        ) : status === "error" ? (
          <div className="column">{error.message}</div>
        ) : (
          <div className="column space-y-4">
            {data.pages.map((page) => (
              <>
                {page.list.map((post) => (
                  <Post key={post._id} post={post} />
                ))}
              </>
            ))}

            <div
              className="has-text-centered has-text-grey-light is-size-7 mx-4"
              ref={ref}
            >
              {isFetchingNextPage
                ? "加载中..."
                : hasNextPage
                ? "Load More"
                : "没有更多了"}
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4 hidden lg:flex relative">
        <div className="bg-base-100 shadow-xl h-auto absolute">
          <Card />
        </div>
      </div>
    </div>
  );
}
