export default function hasValuesFromArray(set, array) {
    const exists = array.every((element) => set.has(element));
    return exists;
}
