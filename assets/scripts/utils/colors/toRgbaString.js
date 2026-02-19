export const toRgbaString = ({r, g, b, a = 1}) => {
	let rgbaText = `rgba(${r}, ${g}, ${b}, ${a})`;
	
	if (rgbaText.includes(', 1)')) {
		rgbaText = rgbaText.replace('rgba(', 'rgb(').replace(', 1)', ')');
	}
	
	return rgbaText;
}