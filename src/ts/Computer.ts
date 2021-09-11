import View from "./View";

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

  static createComputer(value) {
    console.log(value);
    const temp: string[] = [
      'Intel',
      'Core i9-9900KS',
      'Nvidia',
      'RTX 3090',
      '1',
      'G.SKILL',
      'Ripjaws 4 DDR4 2400 C14 8x16GB',
      '1',
      '12TB',
      'WD',
      'Gold 12TB (2017)',
    ];

    const computer = new Computer(
      temp[0],
      temp[1],
      temp[2],
      temp[3],
      temp[4],
      temp[5],
      temp[6],
      temp[7],
      temp[8],
      temp[9],
      temp[10]
    );

    console.table(computer)
    View.showScoreArea(computer)
  }
}
