const generateQuote = document.querySelector('.quote');
const buttonGenerate = document.querySelector('.generate-quote-button');
const authorQuote = document.querySelector('.author');



function randomQuotes(){
    let randomQuote = quotesarr[Math.floor(Math.random()*quotesarr.length)];
        generateQuote.innerHTML =  randomQuote.quotes;
        authorQuote.innerHTML = randomQuote.author;
}

let quotes1 = {
    quotes: "Жить — значит рисковать всем. В противном случае ты просто вялая кучка" +
        " беспорядочно собранных молекул, плывущих по течению Вселенной.",
    author: "Рик санчез",
};
let quotes2 = {
    quotes: "Иногда момент, который ты так долго ждал, приходит в самое неподходящее время...",
    author: "Доктор Джон «Джей Ди (J.D.)» Дориан",
};
let quotes3 = {
    quotes:"— И сколько же это будет стоить?" +
        "    — Это бесплатно!" +
        "    — Звучит дороговато.",
    author: "Гомер Симпсон (Homer Simpson)",
};
let quotes4 = {
    quotes: "Самое худшее, когда нужно ждать и не можешь ничего сделать. От этого можно сойти с ума.",
    author: "Эрих Мария Ремарк",
};
let quotes5 = {
    quotes: "Если ты плачешь не от счастья, то перестань.",
    author: "Филипп Джей Фрай",
};
let quotes6= {
    quotes: "И помните об этикете. Вилки в левый карман, ножи в правый.",
    author: "Бендер Родригез",
};
let quotes7 = {
    quotes: "Бог мой! Надо бы что-то предпринять. Но я уже в пижаме…",
    author: "Профессор Хьюберт Фарнсворт",
};
let quotes8 = {
    quotes: "Ваше время ограничено, не тратьте его, живя чужой жизнью",
    author: "Стив Джобс",
};
let quotes9 = {
    quotes: "Сложнее всего начать действовать, все остальное зависит только от упорства.",
    author: "Амелия Эрхарт",
};
let quotes10 = {
    quotes: "Важен тот человек, который приходит на помощь тогда, когда его даже не просят.",
    author: "Доктор Джон «Джей Ди (J.D.)» Дориан",
};
let quotes11 = {
    quotes: "День Святого Валентина? О черт, опять забыл завести девушку!",
    author: "Филипп Джей Фрай",
};

let quotesarr = [
    quotes1,quotes2,quotes3,quotes4,quotes5,quotes6,
    quotes7,quotes8,quotes9,quotes10,quotes11
];

buttonGenerate.addEventListener('click', randomQuotes);

