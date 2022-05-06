export default function appendToEachArrayValue(array, appendString) {
    // eslint-disable-next-line
    for (const value of array) {
	// eslint-disable-next-line
	array[array.indexof(value)] = appendString + value;
    }

    return array;
}
