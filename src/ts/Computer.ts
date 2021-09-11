export default class Computer {
  constructor(
    public cpuBrand: string,
    public cpuModel: string,
    public gpuBrand: string,
    public gpuModel: string,
    public ramAmount: string,
    public ramBrand: string,
    public ramModel: string,
    public storageKind: string,
    public storageCapacity: string,
    public storageBrand: string,
    public storageModel: string
  ) {}

  static createComputer() {
    console.log('aaaaaa')
  }
}