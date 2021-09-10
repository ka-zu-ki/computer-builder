const baseUrl = 'https://api.recursionist.io/builder/computers';

type Method = 'GET';
type Params = 'cpu' | 'gpu'| 'ram' | 'storage'

const fetchApi = async ({
  method,
  params,
}: {
  method: Method;
  params: Params;
}) => {
  const res = await fetch(`${baseUrl}?type=${params}`, { method });

  if (res.status == 204) {
    return { status: res.status };
  }

  const result = res.json();
  return { status: res.status, body: result };
};

const fetchCpuData = async () => {
  const { body } = await fetchApi({
    method: 'GET',
    params: 'cpu',
  });

  return body;
};

export { fetchCpuData }