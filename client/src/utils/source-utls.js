export const addEllipsis = (text) => {
	if (text.length > 48) return text.substring(0, 50) + "..."
	return text
}
