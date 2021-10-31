import { css, keyframes } from "@material-ui/system";

export interface FadeAnimationProps {
  active: boolean;
}

const fade = (scaleFrom: number, scaleTo: number) => keyframes`
  from {
    transform: scale(${scaleFrom});
    opacity: 0;
  }

  to {
    transform: scale(${scaleTo});
    opacity: 1;
  }
`;

const fadeAnimation = (active: boolean, animation: any) => css`
  ${active && {
    animation: `${animation} 1s linear`,
    transition: 'visibility 1s linear'
  }}
`;

export const fadeInAnimation = ({ active }: FadeAnimationProps) => fadeAnimation(active, fade(0.25, 1));

export const fadeOutAnimation = ({ active }: FadeAnimationProps) => fadeAnimation(active, fade(1, 0.25));