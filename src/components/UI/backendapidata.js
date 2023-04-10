import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemberPage from "./card/memberspage";
import "./backendapidata.css";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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
    const userData = querySnapshot.docs.map((doc) => ({
      name: doc.data().fullName,
      profile_image: doc.data().profile_image,
      address: doc.data().address,
      profession: doc.data().profession,
      id: doc.id,
      ...doc.data(),
    }));
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
          />
        </button>
      ))}
    </div>
  );
};

export default ApiData;
