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

    fetchCpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, cpuBrand);

      cpuBrand.addEventListener('change', () => {
        this.filterModel(res, cpuModel, cpuBrand)
      })
    });
  }

  static getGpu() {
    let brand: string[] = [];

    fetchGpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, gpuBrand);

      gpuBrand.addEventListener('change', () => {
        this.filterModel(res, gpuModel, gpuBrand)
      })
    });
  }

  static getRam() {
    let brand: string[] = [];

    fetchRamData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, ramBrand);
      
      ramBrand.addEventListener('change', () => {
        this.filterModel(res, ramModel, ramBrand)
      })
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
          storage = Array.from(new Set(storage))
          brand = Array.from(new Set(brand));
        }
        View.addSelectBox(storage, storageCapacity)
        View.addSelectBox(brand, storageBrand);

        storageCapacity.addEventListener('change', () => {
          this.filterModel(res, storageModel, storageBrand, storageCapacity)
        })

        storageBrand.addEventListener('change', () => {
          this.filterModel(res, storageModel, storageBrand, storageCapacity)
        })
      });
    });
  }

  private static filterModel(res, modelElm: HTMLSelectElement, brandElm: HTMLSelectElement, storageElm?) {
    let model: string[] = []

    View.resetSelectBox(modelElm)
    const brand = (<HTMLSelectElement>brandElm).value
    const storage = (<HTMLSelectElement>storageElm)?.value
    const filteredModel = res.filter(r => r.Brand == brand)

    if (storage) {
      for (const i in filteredModel) {
        if (filteredModel[i].Model.includes(storage)) model.push(filteredModel[i].Model);
        model = Array.from(new Set(model));
      }
    } else { 
      for (const i in filteredModel) {
        model.push(filteredModel[i].Model);
        model = Array.from(new Set(model));
      }
    }

    View.addSelectBox(model, modelElm);
  }
}
