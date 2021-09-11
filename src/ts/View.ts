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

export default class View {
  static addSelectBox(data: string[] | number[], elm: HTMLSelectElement) {
    elm.add(new Option('-'))

    data.forEach((data) => {
      elm.add(new Option(`${data}`))
    })
  }

  static resetSelectBox(select: HTMLElement) {
    while (1 <= select.childNodes.length) {
      select.removeChild(select.firstChild);
    }
  }
}
