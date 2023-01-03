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
export const trackOrderStatus = async (id) => {
    try {
        const res = await httpRequest.get(`/order/user/getList`, {
            params: {
                // userId: id,
                userId: 'bb9e74f3-e0e9-40a8-a633-6e026fccaf1b',
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
export const manageOrder = async (id) => {
    try {
        const res = await httpRequest.get(`/order/shop/getList`, {
            params: {
                // shopId: id,
                shopId: "bc3295ef-4622-4829-b91c-e40d382c696d"
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
