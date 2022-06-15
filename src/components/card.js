import { useQueries } from "react-query";
import { getBingDailyImage, getJonasEmotion } from "../api/sundry";

const Card = () => {
  const [res1, res2] = useQueries([
    { queryKey: "bingDailyImage", queryFn: getBingDailyImage },
    { queryKey: "jonasEmotion", queryFn: getJonasEmotion },
  ]);
  const list = [
    {
      href: "https://github.com/liweili50",
      icon: "czs-github-logo",
      label: "Github 🎈",
    },
    {
      href: "https://www.zhihu.com/people/li-wei-Jonas/activities",
      icon: "czs-zhihu",
      label: "知乎",
    },
    {
      href: "https://weibo.com/liuyifeiofficial",
      icon: "czs-weibo",
      label: "❤️",
    },
    // {
    //   href: "mailto:liweili50@163.com",
    //   icon: "czs-message-l",
    //   label: "Email Me",
    // },
  ];
  const handleClick = () => {
    window.open("http://www.bing.com");
  };
  return (
    <>
      <div onClick={handleClick} className="cursor-pointer">
        {res1.isSuccess && (
          <figure>
            <img
              src={res1.data.data.url}
              title={res1.data.data.copyright.split("(")[0]}
              alt="必应每日图片"
            />
          </figure>
        )}
      </div>
      <div className="p-6 flex">
        <div className="avatar">
          <div className="w-16 rounded">
            <img src="https://avatars2.githubusercontent.com/u/19683924?s=460&v=4" />
          </div>
        </div>
        <div className="px-4">
          <h2 className="card-title">Jonas</h2>
          <p>
            <i className="czs-location-l"></i>Shanghai China
          </p>
        </div>
      </div>
      <div className="px-6">
        <div style={{ minWidth: 200 + "px" }}>
          {res2.isSuccess &&
            res2.data.data.emotion
              .split(",")
              .map((item) => <p key={item}>{item}</p>)}

          <p className="link link-hover">
            <a
              href="https://music.163.com/#/song?id=1478314423"
              rel="noreferrer"
              target="_blank"
            >
              —— 「father and son」
            </a>
          </p>
        </div>
        <div className="space-x-4 py-4">
          {list.map((item) => (
            <a
              key={item.icon}
              rel="noopener noreferrer"
              target="_blank"
              className="tooltip"
              data-tip={item.label}
              href={item.href}
            >
              <span className="icon">
                <i className={item.icon} aria-hidden="true"></i>
              </span>
            </a>
          ))}
          <a
            className="tooltip"
            href="mailto:liweili50@163.com"
            rel="noopener noreferrer"
            aria-label="Email Me"
            data-tip="Email Me"
          >
            <span className="icon">
              <i className="czs-message-l" aria-hidden="true"></i>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
