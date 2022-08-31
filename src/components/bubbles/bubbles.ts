import './bubbles.scss';

const bubblesAnimation = (): () => void => {
  const smallBubble: HTMLDivElement | null = document.querySelector('.small');
  const midBubble: HTMLDivElement | null = document.querySelector('.mid');
  const largeBubble: HTMLDivElement | null = document.querySelector('.large');

  let coordXperc = 0;
  let coordYperc = 0;
  let posX = 0;
  let posY = 0;

  const setBubblesAnimation = () => {
    const distX = coordXperc - posX;
    const distY = coordYperc - posY;

    posX += (distX * 0.15);
    posY += (distY * 0.15);
    (smallBubble as HTMLDivElement).style.cssText = `transform: translate(${posX / 1}%,${posY / 1}%);`;
    (midBubble as HTMLDivElement).style.cssText = `transform: translate(${posX / 5}%,${posY / 5}%);`;
    (largeBubble as HTMLDivElement).style.cssText = `transform: translate(${posX / 2}%,${posY / 2}%);`;

    requestAnimationFrame(setBubblesAnimation);
  };
  setBubblesAnimation();

  const viewer: HTMLElement | null = document.querySelector('.viewer');
  const countCoords = (e: MouseEvent) => {
    const viewerWidth: number | undefined = viewer?.offsetWidth;
    const viewerHeight: number | undefined = viewer?.offsetHeight;

    if (viewerWidth && viewerHeight) {
      const coordX = e.pageX - viewerWidth / 2;
      const coordY = e.pageY - viewerHeight / 2;

      coordXperc = (coordX / viewerWidth) * 100;
      coordYperc = (coordY / viewerHeight) * 100;
    }
  };
  viewer?.addEventListener('mousemove', countCoords);
  const removeAnumation = () => {
    viewer?.removeEventListener('mousemove', countCoords);
  };
  return removeAnumation;
};

export default bubblesAnimation;
