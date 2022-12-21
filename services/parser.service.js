
const about = () => {
    return "Url Parser Api";
}

const toHash = (url) => {

    if (url == ''){
        return {};
    }

    const urlArray = url.split('/');
    
    const responseObject = buildResponseObject(urlArray);

    return responseObject;
}

const buildResponseObject = (urlArray) => {

    if (urlArray.length == 0) {
        return {};
    }

    const filteredUrlArray = removeUnusedItems(urlArray)
    
    const parameters = getParameters(filteredUrlArray);

    return {
      version: getVersion(filteredUrlArray),
      collection: getCollection(filteredUrlArray),
      id: getId(filteredUrlArray),
      ...parameters
    }
}

const removeUnusedItems = (urlArray) => {
    return urlArray.filter(value => value != '' && value != 'api');
}

const getQueryString = (urlArray) => {
    if (urlArray.length < 3) { 
        return "";
    }

    return urlArray[2].split('?')[1];
}

const getVersion = (urlArray) => {
    return urlArray[0];
}

const getCollection = (urlArray) => {
    if (urlArray.length < 2) { 
        return "";
    }

    return urlArray[1];
}

const getId = (urlArray) => {
    if (urlArray.length < 3) { 
        return "";
    }

    return urlArray[2].split('?')[0];
}

const getParameters = (arrayParameters) => {

    const searchParams = new URLSearchParams(getQueryString(arrayParameters));
    let result = {};

    searchParams.forEach((value, key) => {
        console.log(value, key);

        result[key] = value;
      });

    return result;

}

module.exports = {toHash, about}