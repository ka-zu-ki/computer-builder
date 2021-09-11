import { View } from './View';
import {
  fetchCpuData,
  fetchGpuData,
  fetchRamData,
  fetchStorageData,
} from './fetch';
import {
  cpuBrand,
  cpuModel,
  gpuBrand,
  gpuModel,
  ramAmount,
  ramBrand,
  ramModel,
  storageKind,
  storageCapacity,
  storageBrand,
  storageModel,
  btn,
  score,
} from './config';

export class Controller {
  static getCpu() {
    let brand: string[] = [];
    let model: string[] = [];

    fetchCpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, cpuBrand);

      cpuBrand.addEventListener('change', () => {
        View.resetSelectBox(cpuModel)
        
        const brand = (<HTMLInputElement>cpuBrand).value
        const filteredBrand = res.filter(r => r.Brand == brand)

        for (const i in filteredBrand) {
          model.push(filteredBrand[i].Model);
          model = Array.from(new Set(model));
        }
        View.addSelectBox(model, cpuModel);
      })
    });
  }

  static getGpu() {
    let brand: string[] = [];
    let model: string[] = [];

    fetchGpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        model.push(res[i].Model);
        brand = Array.from(new Set(brand));
        model = Array.from(new Set(model));
      }

      View.addSelectBox(brand, gpuBrand);
      View.addSelectBox(model, gpuModel);
    });
  }

  static getRam() {
    let brand: string[] = [];
    let model: string[] = [];

    fetchRamData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        model.push(res[i].Model);
        brand = Array.from(new Set(brand));
        model = Array.from(new Set(model));
      }

      View.addSelectBox(brand, ramBrand);
      View.addSelectBox(model, ramModel);
    });
  }

  static getStorage() {
    let storage: string[] = [];
    let brand: string[] = [];
    let model: string[] = [];

    storageKind.addEventListener('change', () => {
      const storageType = (<HTMLInputElement>storageKind).value;

      fetchStorageData(storageType).then((res) => {
        for (const i in res) {
          let regexStorage = res[i].Model.match(/\d*[TG]B/g).toString()
          storage.push(regexStorage)
          brand.push(res[i].Brand);
          model.push(res[i].Model);
          storage = Array.from(new Set(storage))
          brand = Array.from(new Set(brand));
          model = Array.from(new Set(model));
        }

        View.addSelectBox(storage, storageCapacity)
        View.addSelectBox(brand, storageBrand);
        View.addSelectBox(model, storageModel);
      });
    });
  }
}
