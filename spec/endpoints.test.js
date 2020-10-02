const axios = require('axios');

describe('Server Request Tests', () => {
  test('100 rows of reviews data are being retrieved via get requests on server' , async () => {
    const dbData = await axios.get('http://127.0.0.1:3004/api');
    const dbDataLength = dbData.data.length;
    expect(dbDataLength).toBe(100);
  })

  // test('get request on server is retrieving data from images table', async () => {
  //   const dbData = await axios.get('http://localhost:3004/api/images');
  //   expect(dbData).not.toBe(undefined);
  // })
})