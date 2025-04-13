import InfoPanel from './components/InfoPanel';
import ProjectsPanel from './components/ProjectsPanel';

export default function App() {
	return (
		<div className="min-h-screen bg-[var(--page-bg)] flex justify-center p-6 text-[var(--text-main)]">
			<div className="flex w-full max-w-7xl gap-4">
				{/* Projects Panel */}
				<div className="w-4/5 bg-[var(--content-bg)] p-6 rounded-2xl shadow-xl">
					<ProjectsPanel />
				</div>

				{/* Info Panel */}
				<div className="w-1/5 h-[300px] bg-[var(--info-bg)] p-6 rounded-2xl shadow-xl sticky top-6">
					<InfoPanel />
				</div>
			</div>
		</div>
	);
}
