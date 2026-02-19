export const getRangeGradient = ({direction = 'to right', activeColor, inactiveColor, value}) => {
	return `linear-gradient(${direction}, ${activeColor} ${value}%, ${inactiveColor} ${value}%)`;
}