// import {
//   cpuBrand,
//   cpuModel,
//   gpuBrand,
//   gpuModel,
//   ramAmount,
//   ramBrand,
//   ramModel,
//   storageKind,
//   storageCapacity,
//   storageBrand,
//   storageModel,
//   btn,
//   score,
// } from './config';

export class View {
  static addSelectBox(data: string[] | number[], elm: HTMLElement) {
    data.forEach((data) => {
      const option = document.createElement('option')
      option.innerHTML = `${data}`
      elm.appendChild(option)
    })
  }

  static resetSelectBox(select: HTMLElement) {
    console.log('reset')
  }
}
