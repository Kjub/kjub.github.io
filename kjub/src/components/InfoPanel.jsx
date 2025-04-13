const base = import.meta.env.BASE_URL;

const githubIcon = `${base}assets/github_icon.png`;
const linkedinIcon = `${base}assets/linkedin_icon.png`;

export default function InfoPanel() {
	return (
		<div className="h-full flex flex-col justify-between">
			{/* Top info */}
			<div>
				<h2 className="text-2xl font-bold mb-2">Kjub</h2>
				<span>Software developer</span>
				<ul className="space-y-2 text-sm text-gray-300">
					<li>kjubscube@gmail.com</li>
				</ul>
			</div>

			{/* Bottom icon-only buttons */}
			<div className="flex gap-3 justify-center mt-6">
				<a
					href="https://github.com/Kjub"
					target="_blank"
					rel="noopener noreferrer"
					className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
				>
					<img
						src={githubIcon}
						alt="GitHub"
						className="w-6 h-6 object-contain hover:scale-150 transition-transform"
					/>
				</a>

				<a
					href="https://www.linkedin.com/in/jakub-soviš-a0a368bb"
					target="_blank"
					rel="noopener noreferrer"
					className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
				>
					<img
						src={linkedinIcon}
						alt="LinkedIn"
						className="w-6 h-6 object-contain hover:scale-150 transition-transform"
					/>
				</a>
			</div>
		</div>
	);
}
