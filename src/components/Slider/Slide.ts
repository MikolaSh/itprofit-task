/* eslint-disable @typescript-eslint/no-use-before-define */
import renderContent from '../../utils/render';
import { INITIAL_SERVICE_TYPE, marketTheme, corpTheme } from '../../utils/utils';
import bubblesAnimation from '../bubbles/bubbles';
import createCustomCursor from '../cursor/cursor';

let currentTheme : string = INITIAL_SERVICE_TYPE;

const changeBg = (viewer: HTMLElement) => {
  viewer?.classList.toggle(marketTheme);
  viewer?.classList.toggle(corpTheme);
};

const changeTheme = () => {
  const viewer = document.querySelector('.viewer');
  changeBg(<HTMLElement>viewer);
  currentTheme = <string>(viewer?.classList[viewer.classList.length - 1]);
};

const showSlide = async (direction: string) => {
  changeTheme();
  renderContent(currentTheme, direction);
  const slide: HTMLElement | null = document.querySelector('.slide');
  slide?.addEventListener('animationend', () => {
    slide.classList.remove(direction);
    createSlider();
  }, { once: true });
};

const hideSlide = (direction: string) => {
  const contentContainer = document.querySelector('.content-wraper');
  contentContainer?.classList.toggle('hidden');
  const slide: HTMLElement | null = document.querySelector('.slide');
  slide?.classList.add(direction);
  slide?.addEventListener('animationend', () => {
    slide.classList.remove(direction);
    slide.remove();
    contentContainer?.remove();
    showSlide(direction === 'to-right' ? 'from-left' : 'from-right');

    // setTimeout(() => {
    // }, 1800);
  }, { once: true });
};

const createSlider = (): void => {
  const buttonWraper: HTMLElement | null = document.querySelector('.buttons-wraper');
  const removeBubbleAnumation = bubblesAnimation();
  const removeCursoreScale = createCustomCursor();

  buttonWraper?.addEventListener('click', ({ target }) => {
    const direction = (<HTMLElement>target).classList[(<HTMLElement>target).classList.length - 1];
    switch (direction) {
      case 'to-right':
        hideSlide(direction);
        break;
      case 'to-left':
        hideSlide(direction);
        break;
      default:
        break;
    }
    document.querySelector('.cursor')?.classList.remove('grow');
    removeBubbleAnumation();
    removeCursoreScale();
  }, { once: true });
};

export default createSlider;
