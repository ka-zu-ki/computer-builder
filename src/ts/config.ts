const container = document.getElementById('container')
const cpuBrand = document.getElementById('cpuBrand') as HTMLSelectElement;
const cpuModel = document.getElementById('cpuModel') as HTMLSelectElement;
const gpuBrand = document.getElementById('gpuBrand') as HTMLSelectElement;
const gpuModel = document.getElementById('gpuModel') as HTMLSelectElement;
const ramAmount = document.getElementById('ramAmount') as HTMLSelectElement;
const ramBrand = document.getElementById('ramBrand') as HTMLSelectElement;
const ramModel = document.getElementById('ramModel') as HTMLSelectElement;
const storageKind = document.getElementById('storageKind') as HTMLSelectElement;
const storageCapacity = document.getElementById('storage') as HTMLSelectElement;
const storageBrand = document.getElementById('storageBrand') as HTMLSelectElement;
const storageModel = document.getElementById('storageModel') as HTMLSelectElement;
const btn = document.getElementById('btn');
const score = document.getElementById('score');
const scoreCpuBrand = document.getElementById('scoreCpuBrand')
const scoreCpuModel = document.getElementById('scoreCpuModel')
const scoreGpuBrand = document.getElementById('scoreGpuBrand')
const scoreGpuModel = document.getElementById('scoreGpuModel')
const scoreRamBrand = document.getElementById('scoreRamBrand')
const scoreRamModel = document.getElementById('scoreRamModel')
const scoreStorageDisk = document.getElementById('scoreStorageDisk')
const scoreStorage = document.getElementById('scoreStorage')
const scoreStorageBrand = document.getElementById('scoreStorageBrand')
const scoreStorageModel = document.getElementById('scoreStorageModel')
const scoreGame = document.getElementById('scoreGame')
const scoreWork = document.getElementById('scoreWork')

export {
  container,
  cpuModel,
  cpuBrand,
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
};
