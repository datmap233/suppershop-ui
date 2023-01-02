import * as httpRequest from '~/utils/httpRequest';
export const getNameShop = async (shopId) => {
    try {
        const res = await httpRequest.get(`/shop/info`, {
            params: {
                shopId: shopId,
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};

export const getListProduct = async (shopId) => {
    try {
        const res = await httpRequest.get(`/product/getListShop`, {
            params: {
                shopId: shopId,
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
export const getNameUser = async (userId) => {
    try {
        const res = await httpRequest.get(`/view_info`, {
            params: {
                userId: userId,
            },
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};

export const addProduct = async (data) => {
    try {
        const res = await httpRequest.post(`/shop/addProduct`, {
            shopId: data.shopId,
            categoryId: data.categoryId,
            name: data.name,
            description: data.description,
            image: data.image,
            price: parseInt(data.price),
            remaining_stock: parseInt(data.remaining_stock),
        });
        return res;
    } catch (error) {
        console.log('error');
    }
};
