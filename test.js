function get(request) {
    const requestIsNotArray = !Array.isArray(request);
    let requestIsObject;
    if (requestIsNotArray) {
        requestIsObject = typeof request === "object" && request !== null;
        handleObject(request);
    }
    handleArray(request);
}
function handleArray(request) {
}
function handleObject(request) {
    const keys = Object.keys(request);
    if (keys.length === 0) {
        throw new Error('Error: Empty object found');
    }
    ;
    keys.map(key => {
        request[key];
    });
}
