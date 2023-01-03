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
export const getListProduct = async (productId) => {
    try {
        const res = await httpRequest.get(`/product/getListShop`, {
            params: {
                shopId: 'bc3295ef-4622-4829-b91c-e40d382c696d',
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
