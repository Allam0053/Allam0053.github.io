import type {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
} from 'react';
import { Children, cloneElement, useMemo } from 'react';

import clsxm from '@/lib/clsxm';

export interface ButtonProps
  extends Omit<ComponentProps<'button'>, 'color' | 'ref'> {
  fullSized?: boolean;
  href?: string;
  outline?: boolean;
  pill?: boolean;
  positioningroup?: keyof PositionInButtonGroup;
}

export interface FlowbiteButtonGroupTheme {
  base: string;
  position: PositionInButtonGroup;
}

export interface PositionInButtonGroup {
  none: string;
  start: string;
  middle: string;
  end: string;
}

export interface ButtonGroupProps
  extends ComponentProps<'div'>,
    PropsWithChildren,
    Pick<ButtonProps, 'outline' | 'pill'> {}

const ButtonGroup: FC<ButtonGroupProps> = ({
  children,
  className,
  outline,
  pill,
  ...props
}: ButtonGroupProps) => {
  const items = useMemo(
    () =>
      Children.map(children as ReactElement<ButtonProps>[], (child, index) =>
        cloneElement(child, {
          outline,
          pill,
          // warning changed, original positionInGroup
          positioningroup:
            index === 0
              ? 'start'
              : index === (children as ReactElement<ButtonProps>[]).length - 1
              ? 'end'
              : 'middle',
        })
      ),
    [children, outline, pill]
  );

  return (
    <div className={clsxm(className)} role='group' {...props}>
      {items}
    </div>
  );
};

export default ButtonGroup;
