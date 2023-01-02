import * as httpRequest from '~/utils/httpRequest';
export const checkout = async (data) => {
    try {
        const res = await httpRequest.post(`/order/user/create`, {
            userId: data.userId,
            address: data.address,
            products: data.products,
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
