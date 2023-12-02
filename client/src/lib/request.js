async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if(data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const accessToken = localStorage.getItem('token');
    if(accessToken) {
        options.headers['X-Authorization'] = accessToken;
    }

    //TODO: Review logic
    const response = await fetch(url, options);

    if(response.status === 204) {
        return {}
    }

    const result = await response.json();

    if(response.ok === false) {
        throw result;
    }

    return result;

}

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
export const patch = request.bind(null, 'patch');