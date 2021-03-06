/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable import/named */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND_TOP}/videos`;

function create(objetoDoVideo) {
    return fetch(`${URL_VIDEOS}?_embed=videos`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(objetoDoVideo),
    })
    .then(async (respostaDoServidor) => {
        if (respostaDoServidor.ok) {
            const resposta = await respostaDoServidor.json();
            return resposta;
        }

        throw new Error('Não foi possivel cadastrar os dados:(');
    });
}

export default {
    create,
};
