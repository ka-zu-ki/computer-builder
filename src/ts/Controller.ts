import { View } from './View';
import { fetchCpuData } from './fetch';
import {
  cpuBrand,
  cpuModel,
  gpuBrand,
  gpuModel,
  ramAmount,
  ramBrand,
  ramModel,
  storageKind,
  storage,
  storageBrand,
  storageModel,
  btn,
  score,
} from './config';

export class Controller {
  static getCpu() {
    let brand: string[] = []
    let model: string[] = []
  
    fetchCpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand)
        model.push(res[i].Model)
        brand = Array.from(new Set(brand))
        model = Array.from(new Set(model))
      }

      View.addSelectBox(brand, cpuBrand)
      View.addSelectBox(model, cpuModel)
    });
  }
}
