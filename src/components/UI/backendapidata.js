import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberPage from "./card/memberspage";
import "./backendapidata.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref, getDownloadURL } from "firebase/storage";

const ApiData = (props) => {
  const navigate = useNavigate();

  const handleProfileClick = (item) => {
    alert("You clicked on " + item.name);
    navigate("/memberprofile", { state: item });
  };

  const [data, setData] = useState([]);

  const fetchUserData = async () => {
    const db = getFirestore();
    const querySnapshot = await getDocs(collection(db, "users"));
    const storage = getStorage();
    const userData = await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const profileImageUrl = await getDownloadURL(
          ref(storage, doc.data().imageUrl)
        );
        return {
          name: doc.data().fullName,
          profile_image: profileImageUrl,
          address: doc.data().address,
          profession: doc.data().profession,
          contact: doc.data().phoneNumber,
          homeservice: doc.data().homeService,
          id: doc.id,
          ...doc.data(),
        };
      })
    );
    setData(userData);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <button
          className="button"
          key={item.id}
          onClick={() => {
            handleProfileClick(item);
          }}
        >
          <MemberPage
            name={item.name}
            profile_image={item.profile_image}
            profession={item.profession}
            address={item.address}
            contact={item.contact}
            homeservice={item.homeservice}
          />
        </button>
      ))}
    </div>
  );
};

export default ApiData;
