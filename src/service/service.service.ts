import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ServiceProps, ServiceServiceInterface } from './service.interface';
import { API } from 'src/api/Api';

@Injectable()
export class ServiceService implements ServiceServiceInterface {
  constructor() {}

  formatData(data: any) {
    const arrUnique = new Set();
    const serviceList = [];

    for (const service of data) {
      const split = service.Title.split('::');

      if (split.length === 2 && !arrUnique.has(split[1])) {
        arrUnique.add(split[1]);
        serviceList.push({
          title: split[1],
          id: service.ID,
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
