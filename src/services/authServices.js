import * as httpRequest from '~/utils/httpRequest';
export const login = async (loginData) => {
    try {
        const res = await httpRequest.post(`/login`, {
            username: loginData.user,
            password: loginData.password,
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
export const signup = async (data) => {
    try {
        const res = await httpRequest.post(`/signup`, {
            username: data.username,
            email: data.email,
            password: data.password,
            name: data.name,
            address: data.address,
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
