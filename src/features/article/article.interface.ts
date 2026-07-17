export type TArticle = {
  image: string;
  title: string;
  sortDes: string;
  longDes: string;
  time: string;
  category: 'সংবাদ' | 'মতামত' | 'বিনোদন' | 'খেলাধুলা' | 'সাক্ষাৎকার' | 'ব্যক্তিত্ব' | 'বিবিধ';
};
