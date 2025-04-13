import ProjectCard from './ProjectCard.jsx';
const base = import.meta.env.BASE_URL;

const firefoxIcon = { src: `${base}assets/firefox_icon.png`, alt: 'Firefox' };
const chromeIcon = { src: `${base}assets/chrome_icon.png`, alt: 'Chrome' };
const unityIcon = { src: `${base}assets/unity_icon.png`, alt: 'Unity' };

export default function ProjectsPanel() {
	return (
		<div>
			<h1 className="text-3xl font-bold mb-6 text-[var(--text-title)]">My Projects</h1>

			<ProjectCard
				title="UI Element Highlighter"
				description="This Unity tool allows users to easily navigate, identify, and interact with RectTransform components in the Scene View "
				links={[{ href: 'https://assetstore.unity.com/preview/316773/1049026', ...unityIcon }]}
				media={
					<iframe
						src="https://www.youtube.com/embed/6VhmGErvmuE"
						title="YouTube video"
						frameBorder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowFullScreen
						className="w-full h-full rounded"
					/>
				}
			/>

			<ProjectCard
				title="Steam Game Revenue"
				description="Browser extension that shows estimated revenue on Steam pages."
				links={[
					{
						href: 'https://chromewebstore.google.com/detail/steam-game-revenue/cbmhhgpdmibnpmnmldbilniijeaonkno?authuser=0&hl=en',
						...chromeIcon,
					},
					{ href: 'https://addons.mozilla.org/en-US/firefox/addon/steam-game-revenue/', ...firefoxIcon },
				]}
				media={
					<div className="h-[515px] flex justify-center items-center rounded overflow-hidden">
						<img
							src="https://addons.mozilla.org/user-media/previews/full/318/318555.png?modified=1744466196"
							title="Steam Revenue Extension"
							className="rounded w-auto h-full object-fill"
						/>
					</div>
				}
			/>
		</div>
	);
}
