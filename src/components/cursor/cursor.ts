import './cursor.scss';

const createCustomCursor = () => {
  const cursor: HTMLDivElement | null = document.querySelector('.cursor');

  document.addEventListener('mousemove', (e: MouseEvent) => {
    const posX: number = e.clientX;
    const posY: number = e.clientY;

    (<HTMLDivElement>cursor).style.left = `${posX}px`;
    (<HTMLDivElement>cursor).style.top = `${posY}px`;
  });

  document.querySelectorAll('.slide-button')?.forEach((elem: Element) => {
    elem.addEventListener('mouseover', () => {
      cursor?.classList.toggle('grow');
    });
    elem.addEventListener('mouseleave', () => {
      cursor?.classList.toggle('grow');
    });
  });
};

export default createCustomCursor;
