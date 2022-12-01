var queryCondition = function (queryParams) {
    var queryCondition = {};
    for (var _i = 0, _a = Object.entries(queryParams); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (['firstName', 'lastName', 'grade', 'division'].includes(key)) {
            queryCondition[key] = value;
        }
    }
    return queryCondition;
};
module.exports = queryCondition;
