import { getCpuData } from './fetch';

getCpuData('cpu').then((res) => {
  console.log(res);
});
