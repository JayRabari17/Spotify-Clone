//making these functions so that api call will be easy in front-end

export const makeUnauthenticatedPOSTRequest = async(route,body)=>{
    //fetch is by default get but post has to be explicitly defined
    const response = await fetch('http://localhost:8000' + route, 
    {method: "POST", headers: {"Content-Type":"application/json"}, 
    body: JSON.stringify(body)
    });
    const formattedResponse = response.json();
    return formattedResponse;
}

export const makeAuthenticatedPOSTRequest = async( route,body)=>{
    //getting token from predefined location after removing every thing except token
    const token = getToken();

    const response = await fetch('http://localhost:8000' + route, 
    {method: "POST", headers: {"Content-Type":"application/json", Authorization: `Bearer ${token}`}, 
    body: JSON.stringify(body)
    });
    const formattedResponse = response.json();
    return formattedResponse;
}

export const makeAuthenticatedGETRequest = async(route)=>{
    //getting token from predefined location after removing every thing except token
    const token = getToken();

    const response = await fetch('http://localhost:8000' + route, 
    {method: "GET", headers: {"Content-Type":"application/json", Authorization: `Bearer ${token}`},});
    const formattedResponse = response.json();
    return formattedResponse;
}

const getToken = () => {
    const accessToken = document.cookie.replace(
        /(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
    );
    return accessToken;
};