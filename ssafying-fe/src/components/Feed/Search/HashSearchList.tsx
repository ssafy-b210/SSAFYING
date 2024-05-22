import HashSearchItem from "./HashSearchItem";

interface userProps {
  hashList: {
    hashId: string;
    hashTag: string;
  }[];
}

function HashSearchList({ hashList }: userProps) {
  return (
    <>
      {hashList.map((hash) => (
        <HashSearchItem key={hash.hashId} hashTag={hash.hashTag} />
      ))}
    </>
  );
}

export default HashSearchList;
