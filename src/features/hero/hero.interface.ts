export interface THero {
  image: string;
  title: string;
  sortDes: string;
  // time: string;
  colSpan: string;
  articleID: string;
  category: 'সংবাদ' | 'মতামত' | 'বিনোদন' | 'খেলাধুলা' | 'সাক্ষাৎকার' | 'ব্যক্তিত্ব' | 'বিবিধ';
}
