import textContent from './textContent';

const getBubblesMarkup = () => `
    <div class="bubble small"></div>
    <div class="bubble mid"></div>
    <div class="bubble large"></div>
`;

const getLaptopMarkup = () => `
    <div class="laptop-wraper">
    <div class="laptop-screen">
        <div class="laptop-content"></div>
    </div>
    <div class="laptop-keyboard"></div>
    </div>
`;

const getContentmarkUp = (contentType: string) => `
    <div class="content-wraper">
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

const renderContent = (contentType: string): void => {
  const viewer: HTMLDivElement | null = document.querySelector('.viewer');
  viewer?.insertAdjacentHTML('beforeend', getContentmarkUp(contentType));
  viewer?.insertAdjacentHTML('beforeend', getBubblesMarkup());
  viewer?.insertAdjacentHTML('beforeend', getLaptopMarkup());
};

export default renderContent;
