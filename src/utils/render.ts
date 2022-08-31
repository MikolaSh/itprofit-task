import textContent from './textContent';

const getBubblesMarkup = (contentType: string) => `
    <div class="test"></div>
    <div class="bubble ${contentType} small to-right"></div>
    <div class="bubble ${contentType} mid"></div>
    <div class="bubble ${contentType} large"></div>
`;

const getLaptopMarkup = (contentType: string) => `
    <div class="laptop-wraper">
        <div class="laptop-screen">
            <div class="laptop-content ${contentType}-content"></div>
        </div>
        <div class="laptop-keyboard">
            <div class="laptop_part"></div>
        </div>
    </div>
`;

const renderSlide = (contentType: string, direction?: string) => `
    <div class="slide ${direction || ''}">
      ${getBubblesMarkup(contentType)}
      ${getLaptopMarkup(contentType)}
    </div>
`;

const getContentmarkUp = (contentType: string) => `
    <div class="content-wraper hidden">
            <h2 class="service-title">${textContent[contentType].title}</h2>
            <p class="service-description">
                ${textContent[contentType].description}
            </p>
            <div class="buttons-wraper">
                <button class="slide-button to-left"></button>
                <button class="slide-button to-right"></button>
            </div>
            <div class="service-classifications">
                <div class="service-classification">
                    <h4>Направление</h4>
                    <p>${textContent[contentType].course}</p>
                </div>
                <div class="service-classification">
                    <h4>Тип проекта</h4>
                    <p>${textContent[contentType].projectType}</p>
                </div>
                <div class="service-classification">
                    <h4>Отрасль</h4>
                    <p>${textContent[contentType].industry}</p>
                </div>
            </div>
        </div>
  `;

const renderContent = (contentType: string, direction?: string): void => {
  const viewer: HTMLDivElement | null = document.querySelector('.viewer');
  viewer?.classList.add(contentType);
  viewer?.insertAdjacentHTML('beforeend', getContentmarkUp(contentType));
  viewer?.insertAdjacentHTML('afterbegin', renderSlide(contentType, direction));
  setTimeout(() => {
    document.querySelector('.content-wraper')?.classList.toggle('hidden');
  }, 10);
};

export default renderContent;
