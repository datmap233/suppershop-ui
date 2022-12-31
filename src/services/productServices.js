import * as httpRequest from '~/utils/httpRequest';
export const getDetails = async (productId) => {
    try {
        const res = await httpRequest.get(`/product/getInfo`, {
            params: {
                productId: productId,
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
