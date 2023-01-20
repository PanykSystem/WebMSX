
window.wmsx = window.wmsx || {};

wmsx.TestErrorSync = function(msg) {
    throw new Error(msg);
}

wmsx.TestErrorAsync = async function(msg) {
    throw new Error(msg);
}

