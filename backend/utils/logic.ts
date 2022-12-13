const queryCondition = (queryParams:string) => {
    let queryCondition = {}
    for (const [key, value] of Object.entries(queryParams)) {
        if (['firstName', 'lastName', 'grade', 'division'].includes(key)) {
        }
    }
    return queryCondition
    }

    module.exports = queryCondition