import View from "./View";

export default class Computer {
  static gameScore: number
  static workScore: number

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
    public storageModel: string,
    public cpuBench: string,
    public gpuBench: string,
    public ramBench: string,
    public storageBench: string
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
      '100',
      '100',
      '100',
      '100'
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
      temp[10],
      temp[11],
      temp[12],
      temp[13],
      temp[14]
    );

    console.table(computer)
    const scores = this.calculateScore(computer)
    console.log(scores)
    View.showScoreArea(computer, scores)
  }

  static calculateScore(computer) {
    this.gameScore = Number(computer.cpuBench) * 0.25
    this.gameScore += Number(computer.gpuBench) * 0.6
    this.gameScore += Number(computer.ramBench) * 0.12
    this.gameScore += Number(computer.storageBench) * 0.1

    this.workScore = Number(computer.cpuBench) * 0.6
    this.workScore += Number(computer.gpuBench) * 0.25
    this.workScore += Number(computer.ramBench) * 0.1
    this.workScore += Number(computer.storageBench) * 0.05
    
    this.gameScore = Math.floor(this.gameScore)
    this.workScore = Math.floor(this.workScore)

    return [this.gameScore, this.workScore]
  }
}
