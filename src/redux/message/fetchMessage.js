export default async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const response = await fetch(
    'http://localhost:3000/messages',
    requestOptions,
  );
  const message = await response.json();
  return message.greeting;
};
