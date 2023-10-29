import { Injectable } from '@nestjs/common';
const package_json = require('../package.json');
const os = require('os');

@Injectable()
export class AppService {
  getVersion(): string {
    return 'versão backend ' + package_json.version.toString();
  }

  async getInterfaceNetwork() {
    let address: any = '';
    const networkInterfaces: any = os?.networkInterfaces();

    await Promise.all(
      Object.keys(networkInterfaces).map((interfaceName) => {
        const interfaces = networkInterfaces[interfaceName];

        interfaces.forEach((interfaceData) => {
          if (interfaceData.family === 'IPv4' && !interfaceData.internal) {
            address = interfaceData.address;
          }
        });
      }),
    );

    return address;
  }
}
