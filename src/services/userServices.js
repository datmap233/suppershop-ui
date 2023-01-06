import * as httpRequest from '~/utils/httpRequest';
export const getDetail = async (userId) => {
    try {
        const res = await httpRequest.get(`/user/view_info`, {
            params: {
                userId: userId,
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};