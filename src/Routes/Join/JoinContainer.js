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

    console.log(userName, userID);

    const createAccountMutation = useMutation(CREATE_ACCOUNT, {
        variables: {
            userName: userName.value,
            userID: userID.value,
            password: password.value,
            rePassword: rePassword.value,
            nickname: nickname.value,
            birthday: birthday.value,
            gender: gender.value,
            email: email0.value + email1.value,
            mailing: mailing.value,
            phone: phone1.value + phone2.value + phone3.value,
            cellphone: cellphone1.value + cellphone2.value + cellphone3.value,
            sms: sms.value,
            new_zipcode: new_zipcode.value,
            address_type: address_type.value + address.value,
        }
    });

    const onSubmit = async e => {
        e.preventDefault();

        if (action === "signUp") {

            if (userName.value !== "" &&
                userID.value !== "" &&
                password.value !== "" &&
                rePassword.value !== "" &&
                nickname.value !== "" &&
                birthday.value !== "" &&
                gender.value !== "" &&
                email0.value !== "" &&
                email1.value !== "" &&
                findEmail.value !== "" &&
                phone1.value !== "" &&
                phone2.value !== "" &&
                phone3.value !== "" &&
                cellphone1.value !== "" &&
                cellphone2.value !== "" &&
                cellphone3.value !== "" &&
                new_zipcode.value !== "" &&
                address_type.value !== "" &&
                address.value !== ""
            ) {
                try {
                    const {
                        data: { createAccount }
                    } = await createAccountMutation();
                    if (!createAccount) {
                        toast.error("Can't create account");
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
