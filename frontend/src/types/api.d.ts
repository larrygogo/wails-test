declare namespace API {
    interface Response<T> {
        code: number,
        message: string,
        data: T
    }

    type UserLoginData = {
        username: string, password: string
    }

    type UserLoginResult = Response<IUser.UserInfo>
}