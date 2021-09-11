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
    const computer = new Computer(
      value[0],
      value[1],
      value[2],
      value[3],
      value[4],
      value[5],
      value[6],
      value[7],
      value[8],
      value[9],
      value[10],
      value[11],
      value[12],
      value[13],
      value[14]
    );

    const scores = this.calculateScore(computer)
    View.showScoreArea(computer, scores)
  }

  static calculateScore(computer: Computer) {
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
