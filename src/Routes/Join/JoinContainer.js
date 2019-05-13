import React, {useState} from "react";
import useInput from "../../Hooks/useInput";
import Form from "./Form";

export default () => {
    const [action, setAction] = useState("login");
    const userName = useInput("");
    const userID = useInput("");
    const password = useInput("");
    const rePassword = useInput("");
    const nickname = useInput("");
    const birthday = useInput("");
    const gender = useInput("");
    const email0 = useInput("");
    const email1 = useInput("");
    const findEmail = useInput("");
    const mailing = useInput("");
    const phone1 = useInput("");
    const phone2 = useInput("");
    const phone3 = useInput("");
    const cellphone1 = useInput("");
    const cellphone2 = useInput("");
    const cellphone3 = useInput("");
    const sms = useInput("");
    const new_zipcode = useInput("");
    const address_type = useInput("");
    const address = useInput("");
    const recommend = useInput("");


    return(
        <Form setAction={setAction} action={action} userName={userName}
        userID ={userID} password={password} rePassword={rePassword}
        nickname={nickname} birthday={birthday} gender={gender} email0={email0}
        email1={email1} findEmail={findEmail} mailing={mailing}
        phone1={phone1} phone2={phone2} phone3={phone3}
        cellphone1={cellphone1} cellphone2={cellphone2} cellphone3={cellphone3}
        sms={sms} new_zipcode={new_zipcode} address_type={address_type}
        address={address} recommend={recommend}
         />

    );
 
    

}