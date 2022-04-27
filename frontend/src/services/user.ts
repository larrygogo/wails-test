import request from "../utils/request";

export async function userLogin(data: {username: string, password: string}) {
    return await request.post<API.UserLoginResult>('/api/user/info', data)
}