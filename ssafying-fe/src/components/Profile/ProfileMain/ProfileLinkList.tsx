import styled from "styled-components";
import github from "../../../assets/img/MyPageIcons/github.svg";
import notion from "../../../assets/img/MyPageIcons/notion.svg";
import tistory from "../../../assets/img/MyPageIcons/tistory.svg";
import blog from "../../../assets/img/MyPageIcons/blog.svg";
import etc from "../../../assets/img/MyPageIcons/etc.svg";

function ProfileLinkList() {
  const icons = [
    {
      name: "github",
      src: github,
    },
    {
      name: "notion",
      src: notion,
    },
    {
      name: "tistory",
      src: tistory,
    },
    {
      name: "blog",
      src: blog,
    },
    {
      name: "etc",
      src: etc,
    },
  ];

  const testInfo = [
    {
      id: 1,
      link: "https://github.com/aeong123",
      type: "github",
    },
    {
      id: 2,
      link: "https://www.notion.so/d44f58470aa94c948f6cc9032f4aca3f",
      type: "notion",
    },
    {
      id: 3,
      link: "https://aeong123.tistory.com",
      type: "tistory",
    },
    {
      id: 4,
      link: "https://blog.naver.com/aeong123",
      type: "blog",
    },
    {
      id: 5,
      link: "https://www.acmicpc.net/user/qlsjtm000",
      type: "etc",
    },
  ];

  return (
    <LinkList>
      {testInfo.map((data, index) => {
        const idx = icons.findIndex((el) => el.name === data.type);
        return (
          <LinkListItem key={index}>
            <a href={data.link} type="_blank" rel="noreferrer">
              <IconWarpper>
                <img src={icons[idx].src} alt="" />
              </IconWarpper>
              <div className="text-url">{data.link}</div>
            </a>
          </LinkListItem>
        );
      })}
    </LinkList>
  );
}

export default ProfileLinkList;

const LinkList = styled.ul`
  margin: 0;
  padding: 10px 0 10px;
  list-style: none;

  @media screen and (min-width: 500px) {
    margin: 0 32px;
  }
`;

const LinkListItem = styled.li`
  padding-bottom: 10px;
  font-size: 14px;

  a {
    display: flex;
    color: #000;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .text-url {
    padding-left: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: break-spaces;
  }
`;

const IconWarpper = styled.div`
  width: 20px;
  height: 20px;

  img {
    height: 100%;
    object-fit: cover;
  }
`;
