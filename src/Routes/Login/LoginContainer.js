
import React, { useState } from "react";
import { useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import { toast } from "react-toastify";
import { LOG_IN, LOCAL_LOG_IN} from "./LoginQueries";
import LoginPresenter from "./LoginPresenter";



export default () => {
    const [action, setAction] = useState("logIn");
    const userID = useInput("");
    const password = useInput("");

    const confirmLoginMutation = useMutation(LOG_IN, {
        variables: {
            userID: userID.value,
            password: password.value
        }
    });

    const localLogInMutation = useMutation(LOCAL_LOG_IN);


    const onSubmit = async e => {
        e.preventDefault();

        if (action === "logIn") {
            if (
                userID.value !== "" &&
                password.value !== "" 
              ) {
                try {
                    const {
                      data: { confirmLogin : token }
                    } = await confirmLoginMutation();
                    
                    if (token !== "" && token !== undefined) {
                      localLogInMutation({ variables: { token } });
                      console.log("123");
                    } else {
                      throw Error();
                    }
                  } catch {
                    toast.error("Can't confirm Login check again");
                    console.log("456");

                  }
              } else {
                    toast.error("All field are required");
                    console.log("789");

              }

        }
    }

    return (
        <LoginPresenter
            setAction={setAction}
            action={action}
            userID={userID}
            password={password}            
            onSubmit={onSubmit}
        
            />

    );


}