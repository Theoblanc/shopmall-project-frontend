import React, { useState } from "react";
import useInput from "../../Hooks/useInput";
import Form from "./Form";
import { useMutation } from "react-apollo-hooks";
import { toast } from "react-toastify";
import { CREATE_ACCOUNT } from "./JoinQueries";

export default () => {
    const [action, setAction] = useState("signUp");
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


    const createAccountMutation = useMutation(CREATE_ACCOUNT, {
        variables: {
            user_name: userName.value ,
            userid: userID.value ,
            password: password.value ,
            re_passwored: rePassword.value ,
            nickname: nickname.value , 
            birthday: birthday.value ,
            gender: gender.value ,
            email: email0.value + email1.value , 
            find_email: findEmail.value ,            
            mailing: mailing.value ,            
            phone: parseInt(phone1.value + phone2.value + phone3.value) , 
            cellPhone: parseInt(cellphone1.value + cellphone2.value + cellphone3.value),
            sms: sms.value,
            zipCode: new_zipcode.value ,
            address: address.value  + address_type.value
        }
    });

    const onSubmit = async e => {
        e.preventDefault();
        if (action === "signUp") {

            if (userName.value !== "" &&
                userID.value !== "" &&
                password.value !== "" &&
                rePassword.value !== "" &&
                nickname.value !== "" 
  


            ) {
                try {
                    const {
                        data: { createAccount }
                    } = await createAccountMutation();
                    if (!createAccount) {
                        toast.error("Can't create account");
                        console.log(userName,
                            );
                    } else {
                        toast.success("Account created! Log In now");
                        setTimeout(() => setAction("logIn"), 3000);

                    }
                } catch (e) {
                    toast.error(e.message);
        
                   
                }
            } else {
                toast.error("All field are required");
  
            }
        }

    }
    
    return (
        <Form setAction={setAction} action={action} userName={userName}
            userID={userID} password={password} rePassword={rePassword}
            nickname={nickname} birthday={birthday} gender={gender} email0={email0}
            email1={email1} findEmail={findEmail} mailing={mailing}
            phone1={phone1} phone2={phone2} phone3={phone3}
            cellphone1={cellphone1} cellphone2={cellphone2} cellphone3={cellphone3}
            sms={sms} new_zipcode={new_zipcode} address_type={address_type}
            address={address} onSubmit={onSubmit}
        />
    );
}
