import { client, checkError } from './client.js';

export async function getBlogs() {
  const resp = await client.from('blogs').select('*, authors (*)');
  //   const blogResp = await client.from('blogs').select('*');

  //   const authResp = await client.from('authors').select('*, authors (*)');

  return checkError(resp);
}
