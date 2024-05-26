import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

const upload = async (file) => {
	const date = new Date();
	const storageRef = ref(storage, `images/${date + file.name}`);
	await uploadBytes(storageRef, file);
	return await getDownloadURL(storageRef);
};

export default upload;
