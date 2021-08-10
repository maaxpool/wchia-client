const mergeArray = (arr1, arr2) => {
    let arr = arr1.concat(arr2)
    return Array.from(new Set(arr))
}

const removeArrTarget = (tagArr, arr2) => {
    tagArr = tagArr.filter(item => (arr2.indexOf(item) == -1))
    return tagArr
}

const timeStrFormart = (timeStr) => {
    return timeStr.slice(0, 19).replace(/[A-Z]/g, ' ')
}

export {mergeArray, removeArrTarget, timeStrFormart}