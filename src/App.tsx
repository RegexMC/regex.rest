import "./App.css";
import ReactTooltip from "react-tooltip";
import { Project } from "./components/project";

function App() {
	return (
		<>
			<div className="bg-white dark:bg-gray-800 mx-auto h-screen" style={{ paddingTop: "5rem" }}>
				<div className="flex flex-col items-center relative">
					<h1 className="text-gray-900 dark:text-white text-4xl font-nunito">Projects</h1>
				</div>
				<br></br>
				<div className="flex flex-col sm:flex-row items-center relative justify-center space-x-4 overflow-x-auto ">
					<Project
						title="Custom Items Anilist"
						description="Add custom items to anilist"
						url="https://github.com/RegexMC/CustomItemsAnilist"
						icon="https://raw.githubusercontent.com/RegexMC/CustomItemsAnilist/main/public/assets/CIA.png"
					></Project>
					<Project
						title="Hypixel Quest XP Calculator"
						description="Calculate total XP you can get from selected quests"
						url="https://github.com/RegexMC/Hypixel-Quest-XP-Calculator"
						icon="https://cdn.discordapp.com/attachments/776665274044252171/886580962220199966/70186527-61601080-16ec-11ea-8e0e-49c0f5e4edde.png"
					></Project>
					<Project
						title="uuwuu Discord Bot"
						description="Discord bot (personal use)"
						url="https://github.com/uuwuuxyz/uuwuu.xyz"
						icon="https://github.com/uuwuuxyz/uuwuu.xyz/raw/main/site/public/static/icon_full.png"
					></Project>
				</div>
				<br></br>

				<div className="flex flex-col items-center relative">
					<h1 className="text-gray-900 dark:text-white text-4xl font-nunito">About</h1>
					<br></br>
					<a href="https://github.com/regexmc/" target="_blank">
						<img src="https://github-readme-stats.vercel.app/api?username=regexmc&show_icons=true&theme=nord" />
					</a>
					<br></br>
				</div>
				<div className="flex flex-row items-center relative justify-center ">
					<ReactTooltip />
					<svg
						width="71"
						height="55"
						viewBox="0 0 71 55"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						data-tip="Regex#1028"
					>
						<g clip-path="url(#clip0)">
							<path
								d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
								fill="#ffffff"
							/>
						</g>
						<defs>
							<clipPath id="clip0">
								<rect width="71" height="55" fill="white" />
							</clipPath>
						</defs>
					</svg>
					<ReactTooltip />
					<a href="https://twitter.com/regexmc/" data-tip="RegexMC" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							viewBox="0 0 248 204"
							width="64"
							height="64"
							fill="none"
						>
							<g>
								<path
									d="M221.95,51.29c0.15,2.17,0.15,4.34,0.15,6.53c0,66.73-50.8,143.69-143.69,143.69v-0.04
            C50.97,201.51,24.1,193.65,1,178.83c3.99,0.48,8,0.72,12.02,0.73c22.74,0.02,44.83-7.61,62.72-21.66
            c-21.61-0.41-40.56-14.5-47.18-35.07c7.57,1.46,15.37,1.16,22.8-0.87C27.8,117.2,10.85,96.5,10.85,72.46c0-0.22,0-0.43,0-0.64
            c7.02,3.91,14.88,6.08,22.92,6.32C11.58,63.31,4.74,33.79,18.14,10.71c25.64,31.55,63.47,50.73,104.08,52.76
            c-4.07-17.54,1.49-35.92,14.61-48.25c20.34-19.12,52.33-18.14,71.45,2.19c11.31-2.23,22.15-6.38,32.07-12.26
            c-3.77,11.69-11.66,21.62-22.2,27.93c10.01-1.18,19.79-3.86,29-7.95C240.37,35.29,231.83,44.14,221.95,51.29z"
									fill="#ffffff"
								/>
							</g>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
}

export default App;
