import React, { useEffect, useContext } from "react";
import { Alert } from "react-native";
import * as RNFS from "react-native-fs";

import { StateContext } from "../contexts/StateContext";
import { SET_STATE } from "../constants/actionTypes";

const FileLoader = () => {

  const context = useContext(StateContext);

  const readFolders = async (path) => {
    const files = await RNFS.readDir(path);
    return files;
  }

  const readFile = async (path) => {
    const files = await RNFS.readFile(path, "base64");
    return files;
  }

  const parseName = (name) => {
    if(typeof name === "string"){
      const parsedName = name.replace(/_/g, " ");
      return parsedName;
    }
    return "Untitled";
  }

  const getData = async () => {
    const data = { name: "HOTC", data: {}};
    try{  
      const res1 = await readFolders(RNFS.DocumentDirectoryPath);
      const target1 = res1.find(r => (r.name === "HOTC"));

      const res2 = await readFolders(target1.path);
      const target2 = res2.find(r => (r.name !== ".DS_Store"));
      data.data.name = parseName(target2.name);

      const res3 = await readFolders(target2.path);
      const imgs = res3.find(r => (r.name === "photos"));
      const vids = res3.find(r => (r.name === "videos"));
      const bg1 = res3.find(r => (r.name?.split(".")?.[0] === "background"));
      data.data.background = bg1?.path;
      
      // load images
      const images = { name: "photos", data: [] };
      const res4 = await readFolders(imgs.path);
      const bg2 = res4.find(r => (r.name?.split(".")?.[0] === "background"));
      images.background = bg2?.path;
      res4.forEach(async (r) => {
        if(r.isDirectory() && (r.name !== ".DS_Store")){
          let collection = { name: parseName(r.name), data: [] };
          const res5 = await readFolders(r.path);
          res5.forEach(async (r) => {
            if(r.isFile() && (r.name !== ".DS_Store")){
              // const file = await readFile(r.path);
              collection.data.push({ name: parseName(r.name), data: r.path, uri: `file://${r.path}` });
            }
          });
          images.data.push(collection);
        }
      });

      // load videos
      const videos = { name: "videos", data: [] };
      const res6 = await readFolders(vids.path);
      const bg3 = res6.find(r => (r.name?.split(".")?.[0] === "background"));
      videos.background = bg3?.path;
      res6.forEach(async (r) => {
        if(r.isDirectory() && (r.name !== ".DS_Store")){
          let collection = { name: parseName(r.name), data: [] };
          const res7 = await readFolders(r.path);
          console.log("res", res7)
          res7.forEach(async r => {
            if(r.isDirectory && (r.name !== ".DS_Store")){
              const res8 = await readFolders(r.path);
              const vid = res8.find(r => (r.isFile() && (r.name.includes("mp4"))));
              const thumbnailDir = await readFolders(r.path + "/thumbnail");
              const thumbnail = thumbnailDir.find(r => (r.isFile() && (r.name !== ".DS_Store")));
              // const vidFile = await readFile(vid.path);
              // const imgFile = await readFile(thumbnail.path);
              const bg4 = res7.find(r => (r.name?.split(".")?.[0] === "background"));
              collection.background = bg4?.path;
              collection.data.push({ name: parseName(r.name), data: thumbnail.path, video: "", path: vid.path }); 
            }
          });
          videos.data.push(collection);
        }
      });
      data.data.data = [images, videos];
      context.dispatch({
        type: SET_STATE,
        payload: data,
        isLoading: false
      });
    } catch(err) {
      Alert.alert("", "Some files and folders are missing. Please check your file arrangement and try again");
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default FileLoader;