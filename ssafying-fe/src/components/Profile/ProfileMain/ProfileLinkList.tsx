import styled from "styled-components";
import github from "../../../assets/img/ProfileIcons/github.svg";
import notion from "../../../assets/img/ProfileIcons/notion.svg";
import tistory from "../../../assets/img/ProfileIcons/tistory.svg";
import blog from "../../../assets/img/ProfileIcons/blog.svg";
import etc from "../../../assets/img/ProfileIcons/etc.svg";
import { selectPortfolioLinkList } from "../../../apis/api/Profile";
import { useEffect, useState } from "react";

type BioLink = {
  id: number;
  url: string;
  type: string;
};

function ProfileLinkList(props: { userId: number }) {
  const [bioLinkList, setBioLinkList] = useState<BioLink[]>([]);

  const icons = [
    {
      name: "GITHUB",
      src: github,
    },
    {
      name: "NOTION",
      src: notion,
    },
    {
      name: "TISTORY",
      src: tistory,
    },
    {
      name: "BLOG",
      src: blog,
    },
    {
      name: "ETC",
      src: etc,
    },
  ];

  async function getPortfolioLink() {
    const res = await selectPortfolioLinkList(props.userId);

    // NOTE: API 수정하면 삭제하기 (빈 값이면 에러 응답하는 이슈)
    if (res === undefined) setBioLinkList([]);
    else setBioLinkList(res.data.resultData);
  }

  useEffect(() => {
    getPortfolioLink();
  }, []);

  return (
    <LinkList>
      {bioLinkList.map((data) => {
        const idx = icons.findIndex((el) => el.name === data.type);
        return (
          <LinkListItem key={data.id}>
            <a href={data.url} type="_blank" rel="noreferrer">
              <IconWarpper>
                <img src={icons[idx].src} alt="" />
              </IconWarpper>
              <div className="text-url">{data.url}</div>
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
