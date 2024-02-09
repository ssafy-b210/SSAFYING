import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
// import { storage } from "../apis/firebase";
import { useState } from "react";

const UploadImage = ({ setImage }: { setImage: (p: string) => void }) => {
  const [imageURL, setImageURL] = useState<string>("");
};
