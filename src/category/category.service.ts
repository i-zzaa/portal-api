import { Injectable } from '@nestjs/common';
import { CategoryServiceInterface } from './category.interface';
import { API } from 'src/api/Api';

@Injectable()
export class CategoryService implements CategoryServiceInterface {
  constructor() {}

  formatData(data: any) {
    const arrUnique = new Set();
    const categoryList = [];

    for (const category of data) {
      const split = category.Title.split('::');

      if (split.length === 2 && !arrUnique.has(split[1])) {
        arrUnique.add(split[1]);
        categoryList.push({
          title: split[1],
          id: category.ID,
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

    const result = this.formatData(data.Services);

    // Ordenar por title em ordem ascendente
    result.sort((a, b) => a.title.localeCompare(b.title));

    return result;
  }

  async search(word: string, cod: string, SessionID: string) {
    const { data } = await API().post('Services/GetServiceList', {
      SessionID,
      Name: cod,
    });

    const result = this.formatData(data.Services);
    const filter = await this.filterByKeyword(result, word);

    return filter;
  }
}
