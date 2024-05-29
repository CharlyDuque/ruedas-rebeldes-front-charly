import { createGlobalStyle } from "styled-components"
import { deviceSizes } from "./mediaQueries"

const GlobalStyles = createGlobalStyle`
	html {
		box-sizing: border-box;
		height: 100%;
		overflow: auto;
		width: 100%;
	}
	body {
		background-color: ${props => props.theme.palette.bgColor};
		color: ${props => props.theme.palette.textColor};
		font-family: ${props => props.theme.font};
		font-family: "Montserrat", sans-serif;
		font-size: 16px;
		font-weight: ${props => props.theme.vars.fontRegular};
		&.on__hamburger{
			height: 100vh;
			overflow: hidden;
			.o-hamburguer{
				display: block;
			}
		}
	}
	main {
		overflow: hidden;
		min-height: 568px;
		padding-top: 48px;
		@media ${deviceSizes.sm} {
			padding-top: 70px;
		}
		@media ${deviceSizes.lg} {
			padding-top: 65px;
		}
		@media ${deviceSizes.xl} {
			padding-top: 100px;
		}
	}
	main > .p-block-parser {
		min-height: 100vh;
	}

	h1, h2 ,h3, h4, h5, h6, p, figure {
		margin: 0;
	}
	h1, h2, h3 {
		font-family: ${props => props.theme.vars.avenirNext};
		font-weight: ${props => props.theme.vars.fontBlack};
		font-size: 24px;
		line-height: 1em;
		text-transform: uppercase;
		@media ${deviceSizes.sm} {
			font-size: 52px;
		}
		@media ${deviceSizes.md} {
			font-size: 48px;
		}
		@media ${deviceSizes.xl} {
			font-size: 72px;
		}
	}
	h4, h5, h6 {
		font-size: 14px;
		font-weight: ${props => props.theme.vars.fontBold};
		line-height: 1.3em;
		@media ${deviceSizes.sm} {
			font-size: 18px;
		}
		@media ${deviceSizes.md} {
			font-size: 14px;
		}
		@media ${deviceSizes.lg} {
			font-size: 16px;
		}
		@media ${deviceSizes.xl} {
			font-size: 18px;
		}
	}

	.custom-line-height {
		line-height: 1.3em;
		@media ${deviceSizes.sm} {
			line-height: 1.5em;
		}
	}
	.custom-letter-spacing--10 {
		letter-spacing: -0.01em;
	}
	.custom-letter-spacing-50 {
		letter-spacing: 0.05em;
	}
	.custom-letter-spacing-100 {
		letter-spacing: 0.1em;
	}

	.u-overflow-hidden {
		overflow: hidden;	
		overscroll-behavior-x: none;
	}
	.u-overflow-hidden-ios {
		height: 100%;
		overscroll-behavior-x: none;
		position: fixed;
	}
	.no-smooth-scroll {
		scroll-behavior: auto !important;
	}

	.lazyload-wrapper {
		display: block;
		height: 100%;
		overflow: hidden;
		min-height: 1px;
		min-width: 1px;
		width: 100%;
	}

	.t-generic {
		.p-block-parser {
			margin-bottom: 30px;
			@media ${deviceSizes.sm} {
				margin-bottom: 40px;
			}
			@media ${deviceSizes.md} {
				margin-bottom: 50px;
			}
			@media ${deviceSizes.xl} {
				margin-bottom: 60px;
			}
			> .o-block-acfPage-header:nth-child(1) {
				margin-bottom: 60px;
				@media ${deviceSizes.sm} {
					margin-bottom: 80px;
				}
				@media ${deviceSizes.md} {
					margin-bottom: 100px;
				}
				@media ${deviceSizes.xl} {
					margin-bottom: 120px;
				}
			}
			> div:nth-child(2) {
				.o-block-heading,
				.o-block-paragraph,
				.o-block-list  {
					padding-top: 0;
				}
			}
		}
	}

	.t-generic,
	.t-blog, 
	.t-blog-home {
		.o-block-coreColumns,
		.o-block-coreParagraph, 
		.o-block-coreMedia-text {
			a {
				border-bottom: 2px solid ${props => props.theme.vars.saffron};
				color: ${props => props.theme.vars.saffron};
				font-weight: ${props => props.theme.vars.fontBold};
				&:hover {
					border-bottom: 2px solid ${props => props.theme.vars.mineShaft};
					color: ${props => props.theme.vars.mineShaft};
				}
			}
		}
	}
`

export default GlobalStyles
