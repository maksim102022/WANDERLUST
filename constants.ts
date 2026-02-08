
import { Tour, Destination } from './types';

export const TOURS: Tour[] = [
  {
    id: 'alps',
    name: 'Альпийское приключение',
    description: 'Горные пейзажи и свежий воздух Швейцарии. Идеально для любителей активного отдыха.',
    duration: '7 дней',
    peopleLimit: '12 человек',
    price: 3499,
    image: 'https://picsum.photos/seed/alps/800/600',
    category: 'adventure'
  },
  {
    id: 'europe',
    name: 'Европейская классика',
    description: 'Рим, Париж, Лондон — три великие столицы в одном захватывающем туре.',
    duration: '10 дней',
    peopleLimit: '15 человек',
    price: 4299,
    image: 'https://picsum.photos/seed/europe/800/600',
    category: 'cultural'
  },
  {
    id: 'cruise',
    name: 'Средиземноморский круиз',
    description: 'Путешествие по самым красивым портам на роскошном лайнере.',
    duration: '14 дней',
    peopleLimit: '200 человек',
    price: 5999,
    image: 'https://picsum.photos/seed/cruise/800/600',
    category: 'luxury'
  }
];

export const DESTINATIONS: Destination[] = [
  {
    id: 'maldives',
    name: 'Мальдивы',
    description: 'Райские острова в Индийском океане с лазурной водой.',
    priceFrom: 2999,
    image: 'https://picsum.photos/seed/maldives/800/1000'
  },
  {
    id: 'egypt',
    name: 'Египет',
    description: 'Величественные пирамиды и древние тайны фараонов.',
    priceFrom: 1499,
    image: 'https://picsum.photos/seed/egypt/800/1000'
  },
  {
    id: 'bali',
    name: 'Бали',
    description: 'Тропический рай, сочетающий джунгли и пляжи.',
    priceFrom: 1899,
    image: 'https://picsum.photos/seed/bali/800/1000'
  }
];
