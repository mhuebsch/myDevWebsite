'use client';

import { useEffect, useRef } from 'react';
import ProjectFlipTile from 'app/components/projectFlipTile';
import { projectSummaries } from './projects.data';
import { staggerFadeInScale } from '@/util/gsapAnimations';

const projectTileWrapperClassName =
	'flip-panel my-10 w-4/5 sm:w-full max-w-[350px] min-w-[300px] sm:min-w-[350px] h-56 sm:h-64 rounded-lg border-dotted border-2 border-green-300 bg-gradient-to-tl from-black via-green-950/30 to-black opacity-0 scale-0';
const projectGridClassName =
	'grid w-full max-w-[840px] grid-cols-1 place-items-center gap-x-12 sm:grid-cols-2';

const ProjectsPage = () => {
	const projectTileRefs = useRef([]);

	useEffect(() => {
		const projectTiles = projectTileRefs.current.filter(Boolean);

		if (projectTiles.length > 0) {
			staggerFadeInScale(projectTiles);
		}
	}, []);

	const createProjectTileRefSetter = (index) => (element) => {
		projectTileRefs.current[index] = element;
	};

	return (
		<div className='flex flex-col justify-start m-auto sm:justify-center items-center w-full max-w-[1200px]'>
			<div className='flex flex-col flex-wrap justify-center items-center'>
				<h1 className='text-4xl font-semibold lowercase text-green-300 py-16 animate-fade-in'>
					Projects
				</h1>
				<div className={projectGridClassName}>
					{projectSummaries.map((project, index) => (
						<div
							key={project.id}
							ref={createProjectTileRefSetter(index)}
							className={projectTileWrapperClassName}
						>
							<ProjectFlipTile {...project} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectsPage;
