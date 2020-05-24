export const getTodos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = await response.json();
    return data;
  } catch(err) {
    throw new Error(err);
  }
}