import { getCpuData } from './fetch';

getCpuData('cpu').then((res) => {
  console.log(res);
  for (const i in res) {
    console.log(res[i])
  }
});
