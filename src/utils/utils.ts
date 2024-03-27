// 1700 to 1,700
export const formatDollar = (dollar: number): string => {
	const numStr = dollar.toString();
	let result = "";

	for (let i = numStr.length - 1, count = 0; i >= 0; i--, count++) {
		if (count % 3 === 0 && count !== 0) {
			result = "," + result;
		}

		result = numStr[i] + result;
	}

	return result;
}
