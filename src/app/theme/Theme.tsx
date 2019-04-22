import { css } from "styled-components"

class Theme {
	static maxWidth = "700px"
	static sidePadding = "20px"

	static linkColor = "#0371b8"
	static highlighColor = "#fffeca"
	static codeColor = "#703DAA"
	static preCodeColor = "#444"
	static lightGray = "#cacaca"
	static gray = "#888"
	static backgroundColor = "white"
	static textColor = "#3b3b3b"
	static homeTextColor = "#4054B2"
	static borderRadius = "4px"
	static largeBorderRadius = "8px"
	static darkBlue = "#00356a"

	static challengeBeatColor = "#ff0e37"
	static deinDealColor = "#c40e3d"
	static cardVirtualColor = "#fc5f25"
	static berariahColor = "#fa8f30"
	static carminderColor = "#00a29b"
	static expensesPlannerColor = "#481faf"
	static puppetAnthemsColor = "#a91f13"
	static goaleeColor = "#7161e8"
	static travelStoriesColor = "$linkColor"

	static headerFont =
		"Copperplate, 'Copperplate Gothic', 'Titillium Web', sans-serif"
	static bodyFont = "'Titillium Web', sans-serif"
	static codeFont = "'SF Mono', 'Menlo', 'Monaco', 'Courier', monospace"

	static backgroundTreshold1 = "900px"
	static backgroundTreshold2 = "700px"

	static shadow = ({
		alpha = 60,
		blur = 6,
		x = 2,
		y = 3,
		color = Theme.homeTextColor,
	} = {}) =>
		css`
			box-shadow: ${`${x}px ${y}px ${blur}px ${color}${alpha}`}; /* x, y, blur, spread, color */
		`

	static transition = (prop: string, duration?: string) =>
		css`
			-webkit-transition: ${prop} ${duration} ease-in-out;
			-moz-transition: ${prop} ${duration} ease-in-out;
			-o-transition: ${prop} ${duration} ease-in-out;
			transition: ${prop} ${duration} ease-in-out;
		`

	static lightTopBorder = (size: string) =>
		css`
			border-top: ${size} solid ${Theme.lightGray};
		`

	static lightBottomBorder = (size = "1px") =>
		css`
			border-bottom: ${size} solid ${Theme.lightGray};
		`

	static dottedBottomBorder = () => css`
		border-bottom: 1px dotted ${Theme.textColor};

		${Theme.transition("0.4s")};

		@media (hover: hover) {
			&:hover {
				border-bottom: 1px solid ${Theme.textColor};
			}
		}
	`
}

export default Theme
