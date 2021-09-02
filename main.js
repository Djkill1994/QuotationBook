const generateQuote = document.querySelector('.quote');
const buttonGenerate = document.querySelector('.generate-quote-button');
const authorQuote = document.querySelector('.author');

function randomQuotes() {
    let randomQuote = quotesarr[Math.floor(Math.random() * quotesarr.length)];
    generateQuote.innerHTML = randomQuote.quotes;
    authorQuote.innerHTML = randomQuote.author;
}
let quotesarr = [
    {quotes: "Важен тот человек, который приходит на помощь тогда, когда его даже не просят.",
        author: "Доктор Джон «Джей Ди (J.D.)» Дориан"},
    {quotes: "День Святого Валентина? О черт, опять забыл завести девушку!",
        author: "Филипп Джей Фрай"},
    {quotes: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
        author: "Амелия Эрхарт"},
    {quotes: "Ваше время ограничено, не тратьте его, живя чужой жизнью",
        author: "Стив Джобс"},
    {quotes: "Бог мой! Надо бы что-то предпринять. Но я уже в пижаме…",
        author: "Профессор Хьюберт Фарнсворт"},
    {quotes: "И помните об этикете. Вилки в левый карман, ножи в правый.",
        author: "Бендер Родригез"},
    { quotes: "Если ты плачешь не от счастья, то перестань.",
        author: "Филипп Джей Фрай"},
    {    quotes:"— И сколько же это будет стоить?" +
            "    — Это бесплатно!" +
            "    — Звучит дороговато.",
        author: "Гомер Симпсон (Homer Simpson)"},
    { quotes: "Иногда момент, который ты так долго ждал, приходит в самое неподходящее время...",
        author: "Доктор Джон «Джей Ди (J.D.)» Дориан"},
    { quotes: "Жить — значит рисковать всем. В противном случае ты просто вялая кучка" +
            " беспорядочно собранных молекул, плывущих по течению Вселенной.",
        author: "Рик санчез"},
];

buttonGenerate.addEventListener('click', randomQuotes);

