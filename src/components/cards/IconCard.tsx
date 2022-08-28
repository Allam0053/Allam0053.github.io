import clsxm from '@/lib/clsxm';

type IconCardProps = {
  iconBackgroundColor?: string;
  icon?: string;
  title?: string;
  subtitle?: string;
};

export default function IconCard({
  iconBackgroundColor,
  icon,
  title,
  subtitle,
}: IconCardProps) {
  return (
    <div className='w-full px-4 text-center md:w-4/12'>
      <div className='relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg'>
        <div className='flex-auto px-4 py-5'>
          <div
            className={clsxm(
              'mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg',
              iconBackgroundColor ? iconBackgroundColor : 'bg-pink-400'
            )}
          >
            <i className={clsxm('fas', icon ? icon : 'fa-lightbulb')}></i>
          </div>
          <h6 className='text-xl font-semibold'>{title ? title : 'Title'}</h6>
          <p className='mt-2 mb-4 text-slate-500'>
            {subtitle
              ? subtitle
              : 'Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious.'}
          </p>
        </div>
      </div>
    </div>
  );
}
