export const categories = [
  {
    id: 'gastronomia',
    label: 'GASTRONOMÍA',
    icon: '/assets/icons/category-section/gastronomia-icon.svg',
    gradient: 'linear-gradient(145deg, #ffe600 5%, #ff7300 100%)',
  },
  {
    id: 'bienestar',
    label: 'BIENESTAR',
    icon: '/assets/icons/category-section/bienestar-icon.svg',
    gradient: 'linear-gradient(145deg, #00d4ff 5%, #0045b2 100%)',
  },
  {
    id: 'turismo',
    label: 'TURISMO',
    icon: '/assets/icons/category-section/turismo-icon.svg',
    gradient: 'linear-gradient(145deg, #cfd621 5%, #008845 100%)',
  },
  {
    id: 'conveniencia',
    label: 'CONVENIENCIA',
    icon: '/assets/icons/category-section/convenienciai-icon.svg',
    gradient: 'linear-gradient(145deg, #ff5474 5%, #c00044 100%)',
  },
  {
    id: 'hogar',
    label: 'HOGAR',
    icon: '/assets/icons/category-section/hogar-icon.svg',
    gradient: 'linear-gradient(145deg, #892785 5%, #3000a2 100%)',
  },
  {
    id: 'estetica',
    label: 'ESTÉTICA',
    icon: '/assets/icons/category-section/estetica-icon.svg',
    gradient: 'linear-gradient(145deg, #ff85d2 5%, #d6008d 100%)',
  },
]

const iterationOneCategoryIds = ['turismo', 'gastronomia', 'bienestar', 'hogar']

export const iterationOneCategories = iterationOneCategoryIds.map((categoryId) =>
  categories.find(({ id }) => id === categoryId),
)
