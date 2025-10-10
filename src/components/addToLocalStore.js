import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getStoredCard = () => {
  const storeCardStr = localStorage.getItem("reedCard");
  if (storeCardStr) {
    const storeCardData = JSON.parse(storeCardStr);
    return storeCardData;
  } else {
    return [];
  }
};

const addToLocalStore = (id) => {
  const storeCardData = getStoredCard();
  if (storeCardData.includes(id)) {
    toast.warn("app already installded!");
  } else {
    storeCardData.push(id);
    const data = JSON.stringify(storeCardData);
    localStorage.setItem("reedCard", data);
    toast.success("App installed");
  }
};

export { addToLocalStore, getStoredCard };
