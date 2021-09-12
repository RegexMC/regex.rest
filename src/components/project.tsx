type ProjectProps = {
	title: string;
	description: string;
	url: string;
	icon?: string;
};

export const Project = ({ title, description, url, icon }: ProjectProps): JSX.Element => {
	return (
		<div className="bg-white dark:bg-gray-600 w-96 rounded-lg">
			<a href={url}>
				{icon ? (
					<div className="float-left flex flex-row relative">
						<img src={icon} className="w-32 h-32 rounded-lg" />
					</div>
				) : null}
				<div className="flex flex-col relative">
					<div className="divide-y">
						<h1 style={{ padding: "5px" }} className="text-gray-900 dark:text-white text-xl	font-nunito">
							{title}
						</h1>
						<p style={{ padding: "5px" }} className="text-gray-900 dark:text-white text-base font-nunito">
							{description}
						</p>
					</div>
				</div>
			</a>
		</div>
	);
};
