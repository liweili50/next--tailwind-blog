import { useState, useEffect } from "react";
import Gitalk from "gitalk";
import DocumentTitle from "react-document-title";
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import mediumZoom from "medium-zoom";
import ImageZoom from "../../components/ImageZoom";
import { getPostById } from "../../api/post";
import "gitalk/dist/gitalk.css";
import { useRouter } from "next/router";
const hljs = require("highlight.js/lib/common");
import "highlight.js/styles/github.css";

const Image = ({ children, ...props }) => {
  let { src, alt, folderName, ...rest } = props;
  let url = `https://github.com/liweili50/liweili50.github.io/blob/master/content/blog${folderName}${src}?raw=true`;
  let zoom = React.useRef(mediumZoom());
  return (
    <ImageZoom
      src={url}
      alt={alt}
      zoom={zoom.current}
      background="rgba(0,0,0,0.3)"
      {...rest}
    />
  );
};

const Code = ({ className, children }) => {
  console.log(children);
  if (className) {
    const language = className.replace("lang-", "");
    const html = hljs.highlight(children, { language }).value;
    return (
      <code
        className="max-w-full p-4 dark:text-white"
        dangerouslySetInnerHTML={{ __html: html }}
      ></code>
    );
  } else {
    return <code>{children}</code>;
  }
};

export default function Post() {
  const [data, setData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    handleGetArticle();
  }, []);
  const handleGitalkInit = function ({ title }) {
    const gitalk = new Gitalk({
      clientID: "455057ff16e070218483",
      clientSecret: "1dcb080f82e4958655c4feb5bebf11310ca6face",
      repo: "liweili50.github.io",
      owner: "liweili50",
      admin: ["liweili50"],
      title: title,
      id: "6298cfc5ad14618da3e02367", // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    });
    gitalk.render("comments");
  };
  const handleGetArticle = function () {
    const { pid } = router.query;
    getPostById(pid).then((res) => {
      let { title, folderName, content, createTime } = res.data;
      setData({
        title,
        content,
        folderName,
        time: dayjs(createTime).format("YYYY-MM-DD HH:mm:ss"),
      });
      handleGitalkInit(res.data);
    });
  };
  return (
    data && (
      <DocumentTitle title={data.title}>
        <div className="p-5 lg:p-10 bg-base-100">
          <h1 className=""> {data.title}</h1>
          <h2 className="subtitle has-text-weight-normal is-size-6">
            {data.time}
          </h2>
          <Markdown
            className="prose prose-pre:bg-base-200 prose-pre:text-gray-700 dark:text-white dark:prose-invert max-w-full"
            options={{
              forceBlock: true,
              overrides: {
                img: {
                  component: Image,
                  props: {
                    folderName: data.folderName,
                  },
                },
                code: {
                  component: Code,
                },
              },
            }}
          >
            {data.content}
          </Markdown>
          <div id="comments" />
        </div>
      </DocumentTitle>
    )
  );
}
