const config = require('../config');
const chooseFileBtn = document.querySelector('.choose-file');


chooseFileBtn.addEventListener('click', callJupyterCell);

async function callJupyterCell(e) {
    const response = await fetch(`${config.jupyterURL}/convert?angle=tarek`);
    console.log({response})
    if(response.status !== 200) {
        alert('Check the JupyterURL link, the jupyter kernel gateway is running')
    }
}