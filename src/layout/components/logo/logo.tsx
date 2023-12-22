import { Link } from "react-router-dom";

import styles from "./logo.module.scss";

import { useSidebar } from "src/modules/shared/providers";

export type LogoProps = {
	hideLogoPart: boolean;
}

export function Logo({ hideLogoPart }: LogoProps) {
	const { toggle, close } = useSidebar();

	return (
		<div className={styles.logo}>
			<button
				type="button"
				className="btn btn-round"
				onClick={toggle}
				aria-label="toggle sidebar"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24"
					viewBox="0 0 24 24"
					width="24"
					focusable="false"
					style={{
						pointerEvents: "none",
						display: "block",
						width: "100%",
						height: "100%",
					}}
				>
					<path d="M21 6H3V5h18v1zm0 5H3v1h18v-1zm0 6H3v1h18v-1z"></path>
				</svg>
			</button>
			<Link to="/" onClick={close}>
				<svg
					viewBox="0 0 369.89473684210526 92.10270473369745"
					className={`${hideLogoPart ? styles.logo__short : styles.logo__long}`}
				>
					<defs id="SvgjsDefs1180"></defs>
					<g
						id="SvgjsG1181"
						transform="matrix(1.2799151770499853,0,0,1.2799151770499853,-17.943130935418587,-17.944411368139466)"
						fill="#d72323"
						className={styles.logo__icon}
					>
						<g xmlns="http://www.w3.org/2000/svg" display="none">
							<path
								display="inline"
								d="M79.762,50.001c0-3.41,2.764-6.172,6.174-6.172V29.718H14.064v14.111c3.414,0,6.175,2.762,6.175,6.172   c0,3.414-2.761,6.178-6.175,6.178v14.104h71.872V56.179C82.525,56.179,79.762,53.415,79.762,50.001z"
							></path>
						</g>
						<g xmlns="http://www.w3.org/2000/svg" display="none">
							<path
								display="inline"
								d="M84.649,28.072L69.086,43.635L56.364,30.916l15.562-15.565c-7.393-2.627-15.958-1.005-21.872,4.914   c-5.917,5.914-7.541,14.48-4.916,21.873L14.135,73.142l12.722,12.725l31.006-31.007c7.392,2.626,15.957,1.004,21.872-4.913   C85.652,44.03,87.274,35.467,84.649,28.072z"
							></path>
						</g>
						<g xmlns="http://www.w3.org/2000/svg" display="none">
							<path
								display="inline"
								d="M71.885,38.652V14.066H28.107v24.586h0.016l-2.274,16.811h0.012v22.156h1.979v8.314h7.386v-8.314h29.551   v8.314h7.387v-8.314h1.982V55.463h0.008L71.885,38.652z M35.083,71.154c-2.547,0-4.612-2.059-4.612-4.615   c0-2.549,2.065-4.615,4.612-4.615c2.549,0,4.62,2.066,4.62,4.615C39.703,69.096,37.631,71.154,35.083,71.154z M64.922,71.154   c-2.553,0-4.613-2.059-4.613-4.615c0-2.549,2.061-4.615,4.613-4.615c2.547,0,4.617,2.066,4.617,4.615   C69.539,69.096,67.469,71.154,64.922,71.154z M30.47,54.461l3.009-15.809h1.47h30.278h1.299l3.014,15.809H30.47z"
							></path>
						</g>
						<g xmlns="http://www.w3.org/2000/svg" display="none">
							<path
								display="inline"
								d="M86,18.67l-7.942,8.311l0.177,0.014C71.611,19.072,61.723,14.02,50.561,14.02   c-19.973,0-36.109,16.107-36.109,35.984c0,19.871,16.215,35.977,36.184,35.977c15.459,0,28.668-9.658,33.825-23.25l-13.269-5.516   c-2.992,8.42-11.073,14.465-20.538,14.465c-12.02,0-21.779-9.725-21.779-21.676c0-11.961,9.767-21.691,21.785-21.691   c7.195,0,13.566,3.5,17.541,8.867l-8.686,8.088L86,45.256V18.67z"
							></path>
						</g>
						<g xmlns="http://www.w3.org/2000/svg">
							<polygon points="14.019,14.02 85.981,50.004 14.019,85.98  "></polygon>
						</g>
					</g>
					<g
						id="SvgjsG1182"
						transform="matrix(2.2058257036767976,0,0,2.2058257036767976,111.20590547614837,-10.205289516066106)"
						fill="#3f3f3f"
						className={`${hideLogoPart ? styles.logo__toHide : ''}`}
					>
						<path d="M8.36 31 l0 3.16 c0 3.28 1.24 4 2.2 4 c0.84 0 1.44 -0.12 2.08 -0.48 c0.12 -0.08 0.24 -0.08 0.36 0.16 l0.28 0.6 c0.12 0.2 0 0.4 -0.16 0.52 c-0.68 0.48 -2.48 1.6 -5.6 1.6 c-2.72 0 -4.44 -1.88 -4.44 -3.72 c0 -1.4 0.08 -4.44 0.08 -5.96 l0.04 -5.28 l-2.2 0 c-0.36 0 -0.64 -0.16 -0.64 -0.56 s0.24 -0.68 0.88 -1 c1.32 -0.6 4.68 -3.6 6.16 -5.28 c0.28 -0.32 0.56 -0.4 0.76 -0.4 c0.36 0 0.52 0.28 0.52 0.6 l-0.16 4.24 l5.08 0 c0.24 0 0.36 0.2 0.28 0.36 l-0.4 1.72 c-0.04 0.16 -0.12 0.32 -0.36 0.32 l-4.68 0 c-0.08 1.64 -0.08 3.56 -0.08 5.4 z M23.8 29.36 l0 -2.12 c0 -0.8 -0.08 -1.72 -0.6 -2.2 c-0.4 -0.36 -1.04 -0.48 -1.68 -0.48 c-0.72 0 -1.4 0.16 -2.12 0.64 c-0.6 0.4 -0.12 1.08 -0.12 2.36 c0 1.36 -1 2.28 -2.6 2.28 c-0.92 0 -1.72 -0.56 -1.72 -1.44 s0.28 -2.08 1.12 -2.8 c1.68 -1.52 4.44 -2.96 7.68 -2.96 c2.56 0 3.24 0.4 4.08 1.16 c0.88 0.8 1.12 1.96 1.12 3.4 l0.08 7.96 c0.04 2.08 0.16 2.72 0.92 2.72 c0.56 0 1 -0.44 1.16 -0.72 c0.16 -0.24 0.28 -0.28 0.4 -0.2 l0.56 0.32 c0.16 0.08 0.28 0.2 0.12 0.56 c-0.36 0.84 -1.56 2.72 -4.04 2.72 c-1.56 0 -3.04 -0.56 -3.8 -2.44 l-0.2 0 c-1 0.92 -1.84 1.48 -3.44 2.08 c-0.8 0.28 -1.72 0.36 -2.88 0.36 c-1.4 0 -2.64 -1.52 -2.64 -3.68 c0 -1.76 0.84 -3.6 3.44 -4.88 c3.12 -1.48 4.12 -1.92 5.16 -2.64 z M23.84 36.64 l0 -5.68 c-1.96 1.12 -3.6 1.72 -3.6 4.48 c0 1.84 0.84 2.6 1.72 2.64 c1.08 -0.08 1.88 -1.08 1.88 -1.44 z M40.24 16.76 c0 1.28 -0.88 2.68 -3.04 2.72 c-1.6 0.04 -2.8 -1.04 -2.8 -2.6 c0 -1.28 1.32 -2.44 3 -2.44 c1.88 0 2.84 1.2 2.84 2.32 z M43.040000000000006 39.72 c0 0.28 -0.08 0.4 -0.36 0.4 c-0.32 0 -2.16 -0.12 -5.64 -0.12 c-2.32 0 -3.88 0.12 -4.32 0.12 c-0.2 0 -0.32 -0.08 -0.32 -0.4 l0 -0.8 c0 -0.24 0.12 -0.32 0.4 -0.32 l1.48 0 c0.44 0 0.72 -0.16 0.76 -0.8 c0.08 -1.2 0.08 -2.44 0.08 -3.56 l-0.08 -5.6 c0 -1.12 -0.24 -1.92 -1.92 -2.52 c-0.44 -0.16 -0.48 -0.32 -0.48 -0.56 l0 -0.44 c0 -0.12 0.08 -0.2 0.44 -0.32 l5.96 -1.92 c0.44 -0.16 0.8 -0.24 1.08 -0.24 c0.32 0 0.44 0.2 0.4 0.48 c-0.08 0.68 -0.08 3.2 -0.08 6.72 l0 4.28 c0 1.56 0 3 0.04 3.44 c0.08 0.76 0.28 1.04 0.72 1.04 l1.44 0 c0.32 0 0.4 0.12 0.4 0.36 l0 0.76 z M51.84 31 l0 3.16 c0 3.28 1.24 4 2.2 4 c0.84 0 1.44 -0.12 2.08 -0.48 c0.12 -0.08 0.24 -0.08 0.36 0.16 l0.28 0.6 c0.12 0.2 0 0.4 -0.16 0.52 c-0.68 0.48 -2.48 1.6 -5.6 1.6 c-2.72 0 -4.44 -1.88 -4.44 -3.72 c0 -1.4 0.08 -4.44 0.08 -5.96 l0.04 -5.28 l-2.2 0 c-0.36 0 -0.64 -0.16 -0.64 -0.56 s0.24 -0.68 0.88 -1 c1.32 -0.6 4.68 -3.6 6.16 -5.28 c0.28 -0.32 0.56 -0.4 0.76 -0.4 c0.36 0 0.52 0.28 0.52 0.6 l-0.16 4.24 l5.08 0 c0.24 0 0.36 0.2 0.28 0.36 l-0.4 1.72 c-0.04 0.16 -0.12 0.32 -0.36 0.32 l-4.68 0 c-0.08 1.64 -0.08 3.56 -0.08 5.4 z M78.44 39 l-5.6 1.4 c-0.24 0.08 -0.52 0.16 -0.88 0.16 c-0.4 0 -0.64 -0.2 -0.68 -0.48 l-0.24 -2.16 l-0.24 0 c-0.8 1.4 -3.12 2.64 -5.28 2.64 c-1.6 0 -2.8 0 -4.2 -1.84 c-1.68 -2.24 -1.52 -3.52 -1.52 -6.96 l0.04 -1.76 c0 -1.52 0 -3.12 -0.04 -4 c-0.04 -0.96 -0.88 -1.32 -1.36 -1.4 c-0.68 -0.12 -0.88 -0.08 -0.88 -0.28 l0 -0.8 c0 -0.24 0.08 -0.32 0.44 -0.32 l5.84 0 c0.24 0 0.4 -0.04 0.56 -0.08 c0.16 0 0.32 -0.04 0.44 -0.04 c0.28 0 0.48 0.2 0.44 0.48 c-0.04 0.36 -0.16 2.24 -0.16 5.4 l0 2.16 c0 1.6 -0.24 4.6 0.76 6.16 c0.6 0.92 1.24 0.84 1.96 0.84 c0.68 0 1.56 -0.52 2.16 -1.28 c0.36 -0.4 0.64 -1.04 0.64 -1.44 l-0.04 -9.4 c0 -1 -0.72 -1.32 -1.72 -1.4 c-0.48 -0.04 -0.68 -0.08 -0.68 -0.28 l0 -0.76 c0 -0.32 0.08 -0.36 0.48 -0.36 l5.96 0 c0.28 0 0.48 -0.04 0.68 -0.08 c0.2 0 0.36 -0.04 0.48 -0.04 c0.24 0 0.4 0.2 0.36 0.4 c-0.04 0.36 -0.24 1.4 -0.24 5.44 l0 2.96 c0 1.92 0 3.88 0.08 4.6 c0.12 1.24 0.56 1.4 0.72 1.4 c0.24 0 0.84 0 1.32 -0.12 c0.32 -0.08 0.44 0 0.48 0.16 l0.12 0.76 c0.04 0.2 -0.04 0.28 -0.2 0.32 z M84.16 39.52 l-1.64 1 c-0.2 0.12 -0.32 0.12 -0.48 0.08 l-0.56 -0.2 c-0.16 -0.04 -0.2 -0.12 -0.16 -0.32 c0.12 -0.56 0.12 -3.88 0.12 -6.88 l0 -14.92 c0 -2.68 -0.52 -3.16 -1.76 -3.52 l-0.56 -0.16 c-0.44 -0.12 -0.52 -0.2 -0.52 -0.32 l0 -0.48 c0 -0.12 0.08 -0.28 0.44 -0.4 c2 -0.56 4.52 -1.56 6.08 -2.28 c0.68 -0.36 1 -0.6 1.4 -0.6 s0.48 0.28 0.48 0.68 c0 0.32 -0.28 4.88 -0.32 8.8 l-0.08 4.56 c1.44 -1.44 3.36 -1.92 5.36 -1.92 c2.6 0 4.64 1.72 5.68 3.4 c0.68 1.08 1.16 2.56 1.16 5.16 c0 4.2 -4 9.36 -9.16 9.36 c-2.64 0 -4.16 -0.48 -5.48 -1.04 z M86.64 26.240000000000002 l0 5.24 c0 3.32 -0.04 4.8 0.48 5.84 c0.56 1.04 1.24 1.72 2.32 1.72 c1.16 0 2.56 -0.4 3.32 -2.08 c0.84 -1.84 0.64 -2.84 0.64 -4.44 c0 -5.28 -2.2 -7.04 -4.28 -7.04 c-0.72 0 -1.68 0.24 -2.48 0.76 z M115.56 30.04 l-9.16 0 l0 1.08 c0 4.16 2.36 6.2 5.28 6.2 c1.96 0 3.56 -0.92 4.36 -2.2 c0.08 -0.2 0.24 -0.24 0.4 -0.12 l0.68 0.36 c0.16 0.08 0.28 0.28 -0.08 0.96 c-0.72 1.48 -3.32 4.24 -7.08 4.24 c-2.56 0 -4.68 -0.44 -6 -1.88 c-2.04 -2.2 -2.72 -3.76 -2.76 -6.88 c0 -1.12 0 -3.24 1.8 -5.88 c1.44 -2.12 3.88 -3.28 6.96 -3.28 c6.48 0 6.84 6.2 6.84 6.84 c0 0.52 -0.36 0.56 -1.24 0.56 z M106.44 28.52 l3.84 0 c0.88 0 1.28 -0.2 1.28 -0.8 c0 -1.76 -0.72 -3.48 -1.96 -3.48 c-1.88 0 -2.88 1.48 -3.16 4.28 z"></path>
					</g>
				</svg>
			</Link>
		</div>
	);
}

export default Logo;
