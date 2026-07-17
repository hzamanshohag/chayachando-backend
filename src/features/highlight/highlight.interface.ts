export interface IHighlight {
  image: string;
  category: 'সংবাদ' | 'মতামত' | 'বিনোদন' | 'খেলাধুলা' | 'সাক্ষাৎকার' | 'ব্যক্তিত্ব' | 'বিবিধ';
  articleID: string;
  time: {
    day: number;
    month: number;
    year: number;
  };
  title: string;
  des: string;
}
