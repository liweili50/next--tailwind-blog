import React, { Component } from "react";
import Gitalk from "gitalk";
import DocumentTitle from "react-document-title";
import Markdown from "markdown-to-jsx";
import dayjs from "dayjs";
import mediumZoom from "medium-zoom";
import ImageZoom from "../../components/ImageZoom";
import { getPostById } from "../../api/post";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { github } from "react-syntax-highlighter/dist/esm/styles/hljs";
import "gitalk/dist/gitalk.css";
// import "github-markdown-css/github-markdown.css";
import { useRouter } from "next/router";
// import hljs from "highlight.js/lib/common'";
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

class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      time: "",
      title: "",
      folderName: "",
    };
    this.handleGetArticle = this.handleGetArticle.bind(this);
    this.handleGitalkInit = this.handleGitalkInit.bind(this);
  }
  componentDidMount() {
    this.handleGetArticle();
    window.scrollTo(0, 0);
  }
  handleGitalkInit() {
    const gitalk = new Gitalk({
      clientID: "455057ff16e070218483",
      clientSecret: "1dcb080f82e4958655c4feb5bebf11310ca6face",
      repo: "liweili50.github.io",
      owner: "liweili50",
      admin: ["liweili50"],
      title: this.state.title,
      id: "6298cfc5ad14618da3e02367", // Ensure uniqueness and length less than 50
      distractionFreeMode: false, // Facebook-like distraction free mode
    });
    gitalk.render("comments");
  }
  handleGetArticle() {
    getPostById("6298cfc5ad14618da3e02367").then((res) => {
      let { title, folderName, content, createTime } = res.data;
      this.setState({
        title,
        content,
        folderName,
        time: dayjs(createTime).format("YYYY-MM-DD HH:mm:ss"),
      });
      // this.handleGitalkInit();
    });
  }
  render() {
    return (
      this.state.content && (
        <DocumentTitle title={this.state.title}>
          <div className="p-5 lg:p-10 bg-base-100">
            <h1 className=""> {this.state.title}</h1>
            <h2 className="subtitle has-text-weight-normal is-size-6">
              {this.state.time}
            </h2>
            <Markdown
              className="prose prose-pre:bg-base-200 prose-pre:text-gray-700 dark:text-white dark:prose-invert max-w-full"
              options={{
                forceBlock: true,
                overrides: {
                  img: {
                    component: Image,
                    props: {
                      folderName: this.state.folderName,
                    },
                  },
                  code: {
                    component: Code,
                  },
                },
              }}
            >
              {this.state.content}
            </Markdown>
            <div id="comments" />
          </div>
        </DocumentTitle>
      )
    );
  }
}

export default Article;
