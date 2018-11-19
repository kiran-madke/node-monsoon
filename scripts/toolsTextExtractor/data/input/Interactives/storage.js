/**
 * Created by BBI_2 on 7/29/2016.
 */

/**
 * function checking, if local web storage is supported by the browser or not
 */
function storageAvailable(type) {
    try {
        var storage = window[type];
        var x = "__storage_test__";

        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    } catch (e) {
        return false;
    }
}

/**
 * function saving the tools to the local web storage
 */
function saveResult(key, value) {
    if (storageAvailable("localStorage")) {
        localStorage.setItem(key, JSON.stringify(value));
    }
}