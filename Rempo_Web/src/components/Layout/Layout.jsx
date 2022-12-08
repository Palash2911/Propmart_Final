import React, { useState, useContext, useEffect } from "react";
import classes from "./Layout.module.css";
import { Button, Card } from "../Ui";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import useScreenType from "react-screentype-hook";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import app, { db } from "../firebase_config";
import { collection, doc, setDoc, getDoc, addDoc } from "firebase/firestore";
import FormContext from "./formContenxt/formContext";

const auth = getAuth(app);

const Layout = () => {
  let histo = useNavigate();
  const screenType = useScreenType();
  const [formNo, setFormNo] = useState(1);
  const {
    owner,
    category,
    desc,
    state,
    district,
    taluka,
    village,
    formFields,
  } = useContext(FormContext);
  
  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const docid = await addDoc(collection(db, "Layouts"), {
        address: district,
        availabelPlots: 2,
        District: district,
        layout_desc: desc,
        location: "1234-5678-9000",
        sellerId: auth.currentUser.uid,
        sellerName: owner,
        soldPlots: 1,
        State: state,
        taluka: taluka,
        village: village,
        title: "TITLE",
        totalPlots: formFields.length,
      });

      const dr = collection(db, "Layouts", docid.id, "Plots");
      
      for (let i = 0; i < formFields.length; i++) {  
        await setDoc(doc(dr, `Plot${i+1}`), {
          available: formFields[i].plotStatus,
          description: desc,
          dimension: formFields[i].front + " " + formFields[i].frontUnit + " x " + formFields[i].depth + " " + formFields[i].frontUnit,
          index: i,
          layoutcategory: category,
          layout_id: docid.id,
          rate: formFields[i].sellingPrice,
          totalArea: formFields[i].area + " " + formFields[i].areaUnit
        });
      }
      histo("/")
    } catch (e) {
      console.log("Error", e);
      alert(e);
    }
  };
  return (
    <>
      <div className={classes.form_container}>
        <Card
          width={screenType.isMobile ? "90vw" : "70vw"}
          height="auto"
          radius="24px"
        >
          <div className={classes.form_inner_container}>
            {formNo === 3 ? <h1>Plot Details</h1> : <h1>Layout Details</h1>}
            {formNo === 1 ? <Form1 /> : formNo === 2 ? <Form2 /> : <Form3 />}
            <div className={classes.btn_containers}>
              {formNo > 1 && (
                <Button
                  onClick={() => {
                    let pg = formNo;
                    setFormNo(pg - 1);
                  }}
                  type="1"
                  label="Back"
                  radius="4px"
                />
              )}
              {formNo < 3 && (
                <Button
                  onClick={() => {
                    let pg = formNo;
                    setFormNo(pg + 1);
                  }}
                  type="2"
                  filled
                  label="Next"
                  radius="4px"
                />
              )}
              {formNo === 3 && (
                <Button filled label="Submit" type="1" onClick={handleClick} />
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Layout;
