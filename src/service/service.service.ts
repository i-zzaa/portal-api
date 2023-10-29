import { Injectable } from '@nestjs/common';
import { ServiceServiceInterface } from './service.interface';
import { API } from 'src/api/api';

@Injectable()
export class ServiceService implements ServiceServiceInterface {
  constructor() {}

  formatData(data: any, cod: string) {
    const arrUnique = new Set();
    const serviceList = [];

    for (const service of data) {
      const split = service.Title.split('::');
      const value = split[3];

      if (
        split.length === 4 &&
        !arrUnique.has(value) &&
        service.Title.includes(cod)
      ) {
        arrUnique.add(value);
        serviceList.push({
          title: value,
          id: service.ID,
          cod: `${split[0]}::${split[1]}::${split[2]}::${value}`,

          icon: 'PhBrowsers',
        });
      }
    }

    return serviceList;
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
