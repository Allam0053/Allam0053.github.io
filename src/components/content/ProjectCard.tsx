import * as React from 'react';

import clsxm from '@/lib/clsxm';

import CloudinaryImg from '@/components/images/CloudinaryImg';
import UnstyledLink from '@/components/links/UnstyledLink';
import TechIcons, { TechListType } from '@/components/TechIcons';

import { ProjectFrontmatter } from '@/types/frontmatters';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <UnstyledLink
      href={`/projects/${project.slug}`}
      className={clsxm(
        'h-full w-full',
        'relative flex w-full min-w-0 flex-col break-words rounded-lg bg-slate-700 shadow-lg ',
        className
      )}
    >
      <CloudinaryImg
        className='w-full rounded-t-lg align-middle'
        publicId={project.banner}
        alt={project.title}
        width={400}
        height={400}
        aspect={{ width: 1, height: 1 }}
        preview={false}
      />
      <blockquote className='relative mb-4 p-8'>
        <svg
          preserveAspectRatio='none'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 583 95'
          className='absolute left-0 -top-94-px block h-95-px w-full'
        >
          <polygon
            points='-30,95 583,95 583,65'
            className='fill-current text-slate-700'
          ></polygon>
        </svg>
        <div className='flex justify-between py-1'>
          <h4 className='inline-block text-xl font-bold text-white'>
            {project.title}
          </h4>
          <TechIcons
            techs={project.techs.split(',') as Array<TechListType>}
            iconColor='text-slate-100'
          />
        </div>
        <p className='text-md mt-2 font-light text-white'>
          {project.description}
        </p>
      </blockquote>
    </UnstyledLink>
  );
}
