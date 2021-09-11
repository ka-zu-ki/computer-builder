const baseUrl = 'https://api.recursionist.io/builder/computers';

type Params = 'cpu' | 'gpu'| 'ram' | 'hdd' | 'ssd'

const fetchApi = async (params: Params) => {
  const res = await fetch(`${baseUrl}?type=${params}`, { method: 'GET' });

  if (res.status == 204) {
    return { status: res.status };
  }

  const result = res.json();
  return { status: res.status, body: result };
};

const fetchCpuData = async () => {
  const { body } = await fetchApi('cpu');
  return body;
};

const fetchGpuData = async () => {
  const { body } = await fetchApi('gpu')
  return body
}

const fetchRamData = async () => {
  const { body } = await fetchApi('ram')
  return body
}

const fetchStorageData = async (params: string) => {
  if (params == '1') {
    const { body } = await fetchApi('hdd')
    return body
  } else if (params == '2') {
    const { body } = await fetchApi('ssd')
    return body
  }
}

export { fetchCpuData, fetchGpuData, fetchRamData, fetchStorageData }