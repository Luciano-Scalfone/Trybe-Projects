import http from 'http';

async function httpRequest(url) {
  return new Promise((resolve) => {
    const requisicao = http.request(url, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
    
      res.on('end', () => {
        resolve(body);
        console.log(body);
      });
    });

    requisicao.end();
  });
};

async function main() {
  const [ , , url] = process.argv;
  const resposta = await httpRequest(url);
};

main();
