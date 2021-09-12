import View from './View';
import Computer from './Computer';
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
} from './config';

export class Controller {
  static cpuBench: number;
  static gpuBench: number;
  static ramBench: number;
  static storageBench: number;

  static init() {
    this.getCpu();
    this.getGpu();
    this.getRam();
    this.getStorage();

    this.clickBtn();
  }

  private static getCpu() {
    let brand: string[] = [];

    fetchCpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, cpuBrand);

      cpuBrand.addEventListener('change', () => {
        this.filterModel(res, cpuModel, cpuBrand);
      });

      cpuModel.addEventListener('change', () => {
        for (const i in res) {
          if (res[i].Model == cpuModel.value) this.cpuBench = res[i].Benchmark;
        }
      });
    });
  }

  private static getGpu() {
    let brand: string[] = [];

    fetchGpuData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, gpuBrand);

      gpuBrand.addEventListener('change', () => {
        this.filterModel(res, gpuModel, gpuBrand);
      });

      gpuModel.addEventListener('change', () => {
        for (const i in res) {
          if (res[i].Model == gpuModel.value) this.gpuBench = res[i].Benchmark;
        }
      });
    });
  }

  private static getRam() {
    let brand: string[] = [];

    fetchRamData().then((res) => {
      for (const i in res) {
        brand.push(res[i].Brand);
        brand = Array.from(new Set(brand));
      }
      View.addSelectBox(brand, ramBrand);

      ramBrand.addEventListener('change', () => {
        this.filterModel(res, ramModel, ramBrand, null, ramAmount);
      });

      ramModel.addEventListener('change', () => {
        for (const i in res) {
          if (res[i].Model == ramModel.value) this.ramBench = res[i].Benchmark;
        }
      });
    });
  }

  private static getStorage() {
    let storage: string[] = [];
    let brand: string[] = [];
    let model: string[] = [];

    storageKind.addEventListener('change', () => {
      const storageType = storageKind.value;

      fetchStorageData(storageType).then((res) => {
        for (const i in res) {
          let regexStorage = res[i].Model.match(/\d*[TG]B/g).toString();
          storage.push(regexStorage);
          brand.push(res[i].Brand);
          storage = Array.from(new Set(storage));
          brand = Array.from(new Set(brand));
        }
        View.addSelectBox(storage, storageCapacity);
        View.addSelectBox(brand, storageBrand);

        storageCapacity.addEventListener('change', () => {
          this.filterModel(res, storageModel, storageBrand, storageCapacity);
        });

        storageBrand.addEventListener('change', () => {
          this.filterModel(res, storageModel, storageBrand, storageCapacity);
        });

        storageModel.addEventListener('change', () => {
          for (const i in res) {
            if (res[i].Model == storageModel.value)
              this.storageBench = res[i].Benchmark;
          }
        });
      });
    });
  }

  private static clickBtn() {
    btn.addEventListener('click', () => {
      const value = [
        cpuBrand?.value,
        cpuModel?.value,
        gpuBrand?.value,
        gpuModel?.value,
        ramAmount?.value,
        ramBrand?.value,
        ramModel?.value,
        storageKind?.value,
        storageCapacity?.value,
        storageBrand?.value,
        storageModel?.value,
        this.cpuBench,
        this.gpuBench,
        this.ramBench,
        this.storageBench,
      ];

      Computer.createComputer(value);
    });
  }

  private static filterModel(
    res: any[],
    modelElm: HTMLSelectElement,
    brandElm: HTMLSelectElement,
    storageElm?: HTMLSelectElement,
    ramElm?: HTMLSelectElement
  ) {
    let model: string[] = [];

    View.resetSelectBox(modelElm);
    const brand = brandElm.value;
    const storage = storageElm?.value;
    const amountR = ramElm?.value
    const filteredModel = res.filter((r) => r.Brand == brand);

    if (storage) {
      for (const i in filteredModel) {
        if (filteredModel[i].Model.includes(storage))
          model.push(filteredModel[i].Model);
        model = Array.from(new Set(model));
      }
    } else if (amountR) {
      for (const i in filteredModel) {
        let regex = new RegExp(String.raw`${amountR}x\d{1,2}GB`, "g");
        
        if (regex.test(filteredModel[i].Model)) {
          model.push(filteredModel[i].Model);
        }
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
