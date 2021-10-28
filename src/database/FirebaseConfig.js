import { initializeApp } from "firebase/app";

import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

var FirebaseConfig = {
  apiKey: "AIzaSyCIb0hlUSgJurNUa4glf-dahH698p_52oU",
  authDomain: "jawadraza-c270f.firebaseapp.com",
  projectId: "jawadraza-c270f",
  storageBucket: "jawadraza-c270f.appspot.com",
  messagingSenderId: "291752224883",
  appId: "1:291752224883:web:58e24607f376fedc9f2206",
};

initializeApp(FirebaseConfig);
const dbs = getFirestore();
const getauth = getAuth();
const login = async (email, password) => {
  let resp = null;
  await signInWithEmailAndPassword(getauth, email, password)
    .then((data) => {
      resp = { uid: data.user.uid, error: null };
    })
    .catch((error) => {
      resp = { error: error?.code, uid: null };
    });
  return resp;
};
const logout = async () => {
  getauth.signOut();
};
const getData = async () => {
  const projectSnaps = await getDocs(collection(dbs, "projects"));
  const projectlist = projectSnaps.docs.map((doc) => {
    return { id: doc?.id, data: doc.data() };
  });
  return projectlist;
};
const postData = async (data) => {
  const docRef = await addDoc(collection(dbs, "projects"), {
    title: data.title,
    subtitle: data.subtitle,
    weblink: data.weblink,
    imge: data.imglink,
    imgRef: data.imgRef,
  });
  if (docRef) {
    return { data: docRef?.id, error: null };
  } else {
    return { data: null, error: "Data can not be posted." };
  }
};
const postMsg = async (data) => {
  const docRef = await addDoc(collection(dbs, "msgs"), {
    clientName: data.clientName,
    clientEmail: data.clientEmail,
    clientMsg: data.clientMsg,
    postedDate: new Date(),
  });
  if (docRef) {
    return { data: docRef?.id, error: null };
  } else {
    return { data: null, error: "Message cannot be sent." };
  }
};
const updateData = async (id, data) => {
  // const citiesRef = collection(db, "cities");

  await setDoc(doc(collection(dbs, "projects"), `${id}`), {
    title: data.title,
    subtitle: data.subtitle,
    weblink: data.weblink,
    imge: data.imglink,
    imgRef: data.imgRef ? data.imgRef : null,
  });

  // console.log("resp exp", resp);
  // return resp;
};
const deltData = async (id) => {
  const resp = await deleteDoc(doc(dbs, "projects", `${id}`));
  return resp;
};
const storage = getStorage();

const uploadImage = async (file) => {
  const filename = new Date();
  const imgref = `image/${filename}${file.name}`;
  const storageRef = ref(storage, `${imgref}`);

  const resp = await uploadBytes(storageRef, file);
  if (resp) {
    const imglink = await getDownloadURL(storageRef);
    return { imglink, imgref };
  }
};
const deltImage = async (fileref) => {
  const desertRef = ref(storage, `${fileref}`);

  const resp = await deleteObject(desertRef);
  return resp;
};

export {
  updateData,
  getData,
  postMsg,
  login,
  postData,
  deltData,
  uploadImage,
  deltImage,
  logout,
};
