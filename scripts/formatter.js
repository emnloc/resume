"use strict";

export const format = function (msgs) {
    return Object.keys(msgs).reduce(function (all, k) {
        all[k] = msgs[k].defaultMessage;
        return all;
    }, {});
};

export default { format };
