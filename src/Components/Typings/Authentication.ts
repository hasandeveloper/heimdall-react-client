
export interface Auth {
    email: string;
    password: string;
    subdomain: string;
}

export interface Error {
    message: string;
}

export interface AuthenticationContextInterface {
    formData: Auth;
    error: Error;
    signInHandler: (e: React.FormEvent<HTMLFormElement>) => void;
    onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
    signUpHandler: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface signUpResponse {
    message: string
}

export interface createUserInterface {
    data: object | undefined;
    isError: boolean;
    isLoading: boolean;
}
