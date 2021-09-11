import Computer from './Computer';
import {
  container,
  score,
  scoreCpuBrand,
  scoreCpuModel,
  scoreGpuBrand,
  scoreGpuModel,
  scoreRamBrand,
  scoreRamModel,
  scoreStorageDisk,
  scoreStorage,
  scoreStorageBrand,
  scoreStorageModel,
  scoreGame,
  scoreWork
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

  static showScoreArea(computer: Computer, scores: number[]) {
    score.classList.remove('hidden')
    container.classList.remove('h-screen')
    container.classList.add('h-full')

    scoreCpuBrand.innerHTML = `Brand: ${computer.cpuBrand}`
    scoreCpuModel.innerHTML = `Model: ${computer.cpuModel}`
    scoreGpuBrand.innerHTML = `Brand: ${computer.gpuBrand}`
    scoreGpuModel.innerHTML = `Model: ${computer.gpuModel}`
    scoreRamBrand.innerHTML = `Brand: ${computer.ramBrand}`
    scoreRamModel.innerHTML = `Model: ${computer.ramModel}`
    scoreStorageDisk.innerHTML = `Disk: ${computer.storageKind}`
    scoreStorage.innerHTML = `Storage: ${computer.storageCapacity}`
    scoreStorageBrand.innerHTML = `Brand: ${computer.storageBrand}`
    scoreStorageModel.innerHTML = `Model: ${computer.storageModel}`
    
    scoreGame.innerHTML = `${scores[0]}%`
    scoreWork.innerHTML = `${scores[1]}%`
  }
}
