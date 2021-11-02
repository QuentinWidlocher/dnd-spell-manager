export function localStorageGet<T>(key: string): T | null {
    let json = localStorage.getItem(key);
	if (json != null) {
		return JSON.parse(json)
	} else {
        return null
    }
}