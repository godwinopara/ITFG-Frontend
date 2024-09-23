import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase";

export const uploadFile = (file: File, path: string) => {
  const fileRef = ref(storage, path);
  const uploadTask = uploadBytesResumable(fileRef, file);
  return new Promise<string>((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      null,
      (error: any) => reject(error),
      async () => {
        const url = await getDownloadURL(fileRef);
        resolve(url);
      }
    );
  });
};
