// import img from "../../assets/img/placeholder.jpg";
import {useTitle} from 'react-use';

function About() {
  useTitle('关于');
  return (
    <div className="prose dark:prose-invert max-w-full p-5 lg:p-10 bg-base-100">
      <h1>Hi there 👏</h1>
      <p>
        <a href="http://liweili50.com/">Logue </a>
        是我的个人项目网站，这里会分享我在开发中遇到的问题和一些个人总结。也会有更多想法在后面的日子里实现展现在这里，欢迎不定期骚扰
        🤞
      </p>
      <h3>Front-end</h3>
      <ul>
        <li>
          <a href="https://reactjs.org/">React</a> - A JavaScript library for
          building user interfaces.
        </li>
        <li>
          <a href="https://bulma.io/">Bulma</a> - the modern CSS framework that
          just works.
        </li>
        <li>
          <a href="https://github.com/probablyup/markdown-to-jsx">
            markdown-to-jsx
          </a>{" "}
          - The most lightweight, customizable React markdown component.
        </li>
      </ul>
      <p>
        🚀 仓库地址：
        <a href="https://github.com/liweili50/react-mccree">
          https://github.com/liweili50/react-mccree
        </a>
      </p>

      <h3>Back-end</h3>
      <ul>
        <li>
          <a href="https://nodejs.org/en/">Node.js</a> - A JavaScript runtime
          built on Chrome's V8 JavaScript engine.
        </li>
        <li>
          <a href="https://www.typescriptlang.org/">TypeScript</a> - JavaScript
          with syntax for types
        </li>
        <li>
          <a href="https://expressjs.com/">Express</a> - Node.js web application
          framework
        </li>
        <li>
          <a href="https://www.mongodb.com/">MongoDB</a> - The most popular
          database for modern apps
        </li>
      </ul>
      <p>
        🚀 仓库地址：
        <a href="https://github.com/liweili50/ts-express-blog">
          https://github.com/liweili50/ts-express-blog
        </a>
      </p>

      <h3>Development process</h3>
      <p>
        作为开发者，每个人应该都浮现过做一个个人项目的想法，而且大部分人应该也都实现过，小到可能是一个插件、一个组件都可以算作一次付诸实践。
      </p>
      <p>
        而作为前端开发者，那肯定是想做一个前端的应用，这个想法在我学习Nodejs后就开始准备了。首先是买了一个三年的阿里云服务器，顺便注册了域名，当时正在追
        <b>海贼王</b>，所以特别想用 <code>Logue</code>
        这个域名，而且还有log记录的意思。
      </p>
      <blockquote>
        罗格镇：被称为“开始与结束的城镇”，位置处于东海，伟大航路的入口附近，上一代海贼王哥尔·D·罗杰在罗格镇出生，也在这里被处决。
      </blockquote>
      <p>
        然后很快就用Node实现了一套博客系统，UI选择了相比bootstrap更轻量的
        <a href="https://bulma.io/"> Bulma.css</a>， 也在 <code>GitHub</code>{" "}
        上找了很好用的Markdown编辑器{" "}
        <a href="https://github.com/codex-team/editor.js">Editor.js</a>
        ，但是这样有两个问题让我很难受。
      </p>
      <ul>
        <li>数据备份问题</li>
        <li>在线编辑不方便的问题</li>
      </ul>

      <p>
        这两个问题也很好解决，那就是用一个GitHub仓库来作为数据的存储，这样写markdown还是使用vscode，并且可以随时随地把想法记下了，提交上去顺便同步到服务器的数据库。
      </p>
      <p>
        就这样利用webHooks搭配GitHub
        API很快实现了第一版。随后在优化仓库数据结构时，后续又了解了可以使用
        <a href="https://hexo.io/">Hexo</a> 和{" "}
        <a href="https://jekyllrb.com/"> Jekyll</a>
        构建自己的GitHub
        Pages做博客，但是对其样式不太满意（虽然我只是做数据备份）
      </p>
      <p>
        最终是发现了React的作者<b> Dan Abramov </b>的博客{" "}
        <a href="https://github.com/gaearon/overreacted.io">overreacted.io</a>
        ，让人眼前一亮，原来是基于{" "}
        <a href="https://www.gatsbyjs.com/">Gatsby</a>，随即又是一次重构。
      </p>
      <p>
        在翻阅了Gatsby的文档后，发现了它的强大，可以自定义数据来源，CMS，本地markdown都可以，而且在使用markdown文件作为数据来源时还提供了hooks让你自由发挥。
      </p>
      <p>
        这就很契合我的需求，而且这样以来也不需要GitHub的webhooks了。通过GitHub
        Actions监听push事件自动构建发布了Github
        Pages的同时再把数据变更以及变更的内容发送到服务端，简直完美！
      </p>
      <p>
        总结一下就是：Gatsby来做Github
        Pages仓库，既解决了自建博客系统的数据来源问题，还能很方便的写作（虽然很方便了，但是博客没写几篇😂）
      </p>
      <h3>Others</h3>
      <figure className="image is-2by1 has-margin-5-mobile">
        {/* <img src={img} alt="" /> */}
        <figcaption>Fate Saber</figcaption>
      </figure>
      <p>
        顺便秀一下我的终端，最近一年多一直使用<strong>Win 10</strong>
        作为开发主机，起初是很不情愿的，但是通过摸索尝试，还是找到了一套比较好的搭配。
      </p>
      <p>
        主要的开发配套设施是
        <strong>VScode</strong> + <strong>Remote-WSL/SSH</strong> +{" "}
        <strong>WSL2</strong> + <strong>Terminal</strong>
        ，并且还可以学到不少Linux知识。
      </p>
      <p>
        <a href="https://www.bilibili.com/read/cv845766">Fate </a>
        是我最近最喜欢的一部动漫，而且还找了一张图当作
        <strong> Terminal </strong>
        的壁纸。哈哈哈~
      </p>
      <p>如果你也在用 win 10，不妨一试。</p>
      <h4>😘 Thanks~</h4>
    </div>
  );
}
export default About;
