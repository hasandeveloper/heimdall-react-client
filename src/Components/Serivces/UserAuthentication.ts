import { signUpResponse, Auth} from "../Typings/Authentication";
import {URL, AUTHENTICATION_URI} from "../../Utils/ApiUrl";

export const createUser = async<T extends Auth>(formData: T): Promise<signUpResponse> => {
    const response = await fetch(`${URL}${AUTHENTICATION_URI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
    })
    return response.json()
}
