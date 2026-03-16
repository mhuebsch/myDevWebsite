'use client';

import Link from 'next/link';
import ArrowRightIcon from 'public/svgs/arrow-right.svg';
import FlipPanel from './flipPanel';

const panelClassName =
	'cc-animation-type-flip cc-animation-direction-horizontal h-full w-full';
const frontTitleClassName = 'text-xl text-green-300';
const backTitleClassName = 'font-medium text-sky-400';
const backContentClassName = 'flex flex-col items-center justify-center';
const backLinkClassName = 'project-link mt-8';

interface ProjectFlipTileProps {
	title: string;
	description: string;
	href: string;
	frontImage: string;
	backImage: string;
	isExternal?: boolean;
}

const ProjectTileLink = ({
	title,
	href,
	isExternal = false,
}: Pick<ProjectFlipTileProps, 'title' | 'href' | 'isExternal'>) => {
	if (isExternal) {
		return (
			<a
				className={backLinkClassName}
				href={href}
				target='_blank'
				rel='noreferrer'
				aria-label={`Open ${title}`}
			>
				<ArrowRightIcon />
			</a>
		);
	}

	return (
		<Link
			className={backLinkClassName}
			href={href}
			aria-label={`View ${title}`}
		>
			<ArrowRightIcon />
		</Link>
	);
};

const ProjectFlipTile = ({
	title,
	description,
	href,
	frontImage,
	backImage,
	isExternal = false,
}: ProjectFlipTileProps) => {
	return (
		<FlipPanel
			className={panelClassName}
			frontImage={frontImage}
			backImage={backImage}
			frontContent={<h2 className={frontTitleClassName}>{title}</h2>}
			backContent={
				<div className={backContentClassName}>
					<h3 className={backTitleClassName}>{description}</h3>
					<ProjectTileLink title={title} href={href} isExternal={isExternal} />
				</div>
			}
		/>
	);
};

export default ProjectFlipTile;
