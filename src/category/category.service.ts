import { Injectable } from '@nestjs/common';
import { CategoryServiceInterface } from './category.interface';
import { API } from 'src/api/api';

@Injectable()
export class CategoryService implements CategoryServiceInterface {
  constructor() {}

  formatData(data: any, cod: string) {
    const arrUnique = new Set();
    const categoryList = [];

    for (const category of data) {
      const split = category.Title.split('::');
      const value = split[2];

      if (
        split.length === 3 &&
        !arrUnique.has(value) &&
        category.Title.includes(cod)
      ) {
        arrUnique.add(value);
        categoryList.push({
          title: value,
          id: category.ID,
          cod: `${split[0]}::${split[1]}::${value}`,
        });
      }
    }

    return categoryList;
  }

  filterByKeyword(data: any, keyword: any) {
    keyword = keyword.toLowerCase();

    return data.filter((item) => item.title.toLowerCase().includes(keyword));
  }

  async get(cod: string, SessionID: string) {
    const { data } = await API().post('Services/GetServiceList', {
      SessionID,
      Name: cod,
    });

    const result = this.formatData(data.Services, cod);

    // Ordenar por title em ordem ascendente
    result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }

  async search(word: string, cod: string, SessionID: string) {
    const { data } = await API().post('Services/GetServiceList', {
      SessionID,
      Name: cod,
    });

    const result = this.formatData(data.Services, cod);
    const filter = await this.filterByKeyword(result, word);

    return filter;
  }
}
