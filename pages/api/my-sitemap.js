const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {
    const links = [
        { url: 'https://inglesxdia.tech/', changeFreq: 'daily', priority: 1 },
        { url: 'https://inglesxdia.tech/vocabulario', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/lc', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/di', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/ic', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/ib', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/ex', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/ec', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/fu', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/vb', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/pv', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/fr', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/cv', changeFreq: 'daily', priority: 0.8 },
        { url: 'https://inglesxdia.tech/lecs/ic/cow', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_taxi', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/monkey', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/familia', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/buy', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/verbos_con_b', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/trabajo', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/clima', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/fireman', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_party', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_shopping', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_helen_oliver', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/verbos_con_e', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/verbos_con_d', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/verbos_con_c', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/taxi', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/trabajo_2', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/hoteles', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/profesiones_2', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/conectores', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/rutina_diaria', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/twins', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/birthday', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/emma', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/brian', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/fashion_designer', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/american_dream', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/teacher', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/i_m_zack', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/farmer', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/sofia', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/alex', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_vacation', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_mom', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_best_friend', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/brothers', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/mexico', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_daily_routine', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_house', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_brother_rob', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/leo', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/ana', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_pet_duke', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_family', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/lc/my_father', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_emily_daniel', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_reservacion', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/di/d_restaurant', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/rose', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/dog', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/meses', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/abecedario', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/numeros_10_90', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ic/numeros_1_9', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/marinos', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/acampar', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/preposiciones', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/medicina', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/organos', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/bebidas', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/herramientas', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/cuerpo', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/navidad', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/animales', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/geometricas', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/ciudad', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/personalidad', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/alimentos', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ib/profesiones', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ex/ex_utiles', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/ec/ex_cortas', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/despedirse', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/frases', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/desayuno', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/dentista', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/aeropuerto', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/banco', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fu/compras', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/vb/verbos_con_a', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/do', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/put', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/look', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/get', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/come', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/pv/break', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/buena_suerte', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/te_quiero', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/repita', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/miss_you', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/lo_siento', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/hambriento', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/estoy_bien', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/de_nada', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/de_acuerdo', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/como_estas', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/fr/buenas_noches', changeFreq: 'daily', priority: 0.64 },
        { url: 'https://inglesxdia.tech/lecs/cv/conversacion', changeFreq: 'daily', priority: 0.64 },
    ]

    const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

    res.writeHead(200, {
        'Content-Type': 'application/xml'
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString);
}