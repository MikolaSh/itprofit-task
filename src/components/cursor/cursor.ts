import './cursor.scss';

const createCustomCursor = (): () => void => {
  const cursor: HTMLDivElement | null = document.querySelector('.cursor');
  const slideButtons: NodeListOf<Element> = document.querySelectorAll('.slide-button');
  document.addEventListener('mousemove', (e: MouseEvent) => {
    const posX: number = e.clientX;
    const posY: number = e.clientY;

    (<HTMLDivElement>cursor).style.left = `${posX}px`;
    (<HTMLDivElement>cursor).style.top = `${posY}px`;
  });

  const increaseCursor = () => {
    cursor?.classList.add('grow');
  };

  const reduceCursor = () => {
    cursor?.classList.remove('grow');
  };

  const removeListeners = () => {
    slideButtons.forEach((button) => {
      button.removeEventListener('mouseover', increaseCursor);
      button.removeEventListener('mouseleave', reduceCursor);
    });
  };

  slideButtons.forEach((elem: Element) => {
    elem.addEventListener('mouseover', increaseCursor);
    elem.addEventListener('mouseleave', reduceCursor);
  });
  return removeListeners;
};

export default createCustomCursor;
