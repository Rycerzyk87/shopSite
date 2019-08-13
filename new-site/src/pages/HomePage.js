import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Ogórek - wartości odżywcze i właściwości zdrowotne",
        author: "Anna Kowalczyk",
        text: "Ogórek cenimy przede wszystkim za orzeźwiający, delikatny smak. Ogórki są popularnym dodatkiem do sałatek lub kanapek, chociaż mało kto pamięta, że warzywa te kradną witaminę C z innych produktów, utleniając ten składnik. Nie warto więc łączyć ich z pomidorami czy papryką (chyba, że wytworzymy między nimi 'barierę', np. zrobimy surówkę ze śmietaną, jogurtem, olejem). Ogórki mają jednak wiele innych zalet. Przekonajmy się, dlaczego ogórki należy jeść częściej."
    },
    {
        id: 2,
        title: "Właściwości dyni – 6 powodów by jeść dynię",
        author: "Magdalena Olszewska",
        text: "Dynia to bardzo smaczne a zarazem jedno z najbardziej odżywczych warzyw! Jest pełna witamin i przeciwutleniaczy.Czy wiesz, że istnieje ponad 45 odmian dyni? Małe, średnie, duże i prawdziwe giganty. Wbrew powszechnemu przekonaniu, nie wszystkie dynie są pomarańczowe, wiele z nich jest zielona, biała czy brązowa.  Jedną z moich ulubionych dyń jest dynia hokkaido, której w przeciwieństwie do innych odmian nie trzeba nawet obierać ze skóry."
    }, {
        id: 3,
        title: "CEBULA - właściwości lecznicze. Cebula dobra na przeziębienie, kaca i zaparcia",
        author: "Bożena Zwolińska | Monika Majewska ",
        text: "Cebula to warzywo, którego właściwości lecznicze są znane są od wieków. W medycynie ludowej wywar z cebuli zalecany był w chorobach reumatycznych, syrop przy przeziębieniach, zaś wąchanie surowej cebuli odkażało zakatarzony nos i drogi oddechowe. Przez całe stulecia cebula należała do najcenniejszych leków przeciwszkorbutowych, czyli ostrych braków witaminy C. Zabierali ją w dalekie rejsy marynarze, kupcy, wielorybnicy. I choć cebula nie należy do najbogatszych źródeł tej witaminy, to jednak jej dostępność i skuteczność działania sprawiały, że należała do stałego zaprowiantowania wypraw. Zawdzięczała to przede wszystkim silnym bakteriobójczym substancjom, które potrafią zniszczyć bakterie, oporne na działanie antybiotyków. Ponadto pod łuskami cebuli kryje się fosfor, magnez, siarka, cynk oraz krzem, a wiec minerały wzmacniające ogólną odporność organizmu na różne infekcje i choroby. Jednak cebula to nie tylko sprawdzony sposób na przeziębienie."
    }
]

const HomePage = () => {
    const artlist = articles.map(article => (
        <Article key={article.id} {...article} />
    ))
    return (
        <div className="home">{artlist}</div>
    );
}

export default HomePage;
