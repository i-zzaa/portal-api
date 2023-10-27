import { Injectable } from '@nestjs/common';
import { CatalogServiceInterface } from './catalog.interface';
import { setIconCatalog } from 'src/util/util';
import { API } from 'src/api/Api';

@Injectable()
export class CatalogService implements CatalogServiceInterface {
  constructor() {}

  formatData(data: any) {
    const arrUnique = new Set();
    const categoryList = [];

    for (const catalog of data) {
      const split = catalog.Title.split('::');

      if (split.length === 2 && !arrUnique.has(split[1])) {
        const item = setIconCatalog(catalog);

        arrUnique.add(split[1]);
        categoryList.push({
          cod: `${split[0]}::${split[1]}::`,
          title: split[1],
          id: catalog.ID,
          icon: item.icon,
        });
      }
    }

    return categoryList;
  }

  filterByKeyword(data: any, keyword: any) {
    keyword = keyword.toLowerCase();

    return data.filter((item) => item.title.toLowerCase().includes(keyword));
  }

  async get(SessionID: string) {
    try {
      const { data } = await API().post('Services/GetServiceList', {
        SessionID,
      });

      console.log(data);

      const result = this.formatData(data.Services);

      // Ordenar por title em ordem ascendente
      result.sort((a, b) => a.title.localeCompare(b.title));

      return result;
    } catch (error) {
      new Error(error.message);
    }
  }

  async search(word: string, SessionID: string) {
    const { data } = await API().post('Services/GetServiceList', {
      SessionID,
    });

    const result = await this.formatData(data.Services);
    const filter = await this.filterByKeyword(result, word);

    return filter;
  }
}
