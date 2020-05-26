const orderBy = require('lodash.orderby');

const init = async (payload) => {
    console.log(`algorithm: init with input ${JSON.stringify(payload.input)}`);
    return true;
}

const start = async (args) => {
    console.log(`algorithm: start`);
    const [array, order] = args.input;
    const result = orderBy(array, null, order);
    return result;
}

const stop = async () => {
    console.log('algorithm: stop');
    return true;
}

module.exports = {
    init,
    start,
    stop
}