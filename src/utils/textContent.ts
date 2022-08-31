export interface ItextContent {
  title: string;
  description: string;
  course: string;
  projectType: string;
  industry: string;
}
export interface IserviceDescriptionContent {
  [key: string]: ItextContent;
  corp: ItextContent;
  market: ItextContent;
}

const textContent: IserviceDescriptionContent = {
  corp: {
    title: 'Создание корпоративного сайта для холдинга «АМКОДОР»',
    description: `Разработать и запустить корпоративный сайт для холдинга “АМКОДОР” 
        для развития дилерской сети на рынках Беларуси и стран СНГ.`,
    course: 'WEB-разработка',
    projectType: 'Корпоративные сайты',
    industry: 'Производство, Торговля',
  },
  market: {
    title: 'Создание маркетплейса для<br> бизнеса по перепродаже одежды',
    description: `Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, 
        цель которой превратить ненужные одним людям вещи в полезный ресурс для других.`,
    course: 'WEB-разработка',
    projectType: 'Интернет-магазины ',
    industry: 'Торговля',
  },
};

export default textContent;
