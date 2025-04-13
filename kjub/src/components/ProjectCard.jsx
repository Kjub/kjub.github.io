import { motion } from 'framer-motion';

export default function ProjectCard({ title, description, media, links = [] }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4, ease: 'easeOut' }}
			className="relative bg-[var(--card-bg)] rounded-xl shadow-md p-4 mb-4"
		>
			{/* Tech icons */}
			{links.length > 0 && (
				<div className="absolute top-4 right-4 flex space-x-2">
					{links.map((link, index) => (
						<a
							key={index}
							href={link.href}
							target="_blank"
							rel="noopener noreferrer"
							title={link.alt}
							className="w-6 h-6 block hover:scale-150 transition-transform"
						>
							<img src={link.src} alt={link.alt} className="rounded w-full h-auto object-contain" />
						</a>
					))}
				</div>
			)}

			<h3 className="text-xl font-semibold mb-2 text-[var(--text-title)]">{title}</h3>
			<p className="text-[var(--text-subtle)] mb-3">{description}</p>
			{media && <div className="aspect-video rounded overflow-hidden bg-black p-1">{media}</div>}
			{links && links.length > 0 && (
				<div className="mt-4">
					<h4 className="text-sm text-[var(--text-subtle)] mb-2">Available on:</h4>
					<div className="divide-y divide-gray-600 border-t border-gray-700">
						{links.map((link, index) => (
							<a
								key={index}
								href={link.href}
								target="_blank"
								rel="noopener noreferrer"
								className="flex items-center justify-between px-2 py-2 hover:bg-gray-700 rounded text-sm text-[var(--text-main)] transition-colors"
							>
								<div className="flex items-center gap-2">
									<img src={link.src} alt={link.label} className="w-5 h-5" />
									<span>{title}</span>
								</div>
							</a>
						))}
					</div>
				</div>
			)}
		</motion.div>
	);
}
