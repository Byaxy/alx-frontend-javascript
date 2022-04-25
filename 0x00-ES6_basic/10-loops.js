export default function appendToEachArrayValue(array, appendString) {
    // eslint-disable-next-line
    for (const idx of array) {
	// eslint-disable-next-line
	const value = array[idx];
	array[idx] = appendString + value;
    }

    return array;
}
