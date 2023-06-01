const quotes = [
    {
        qoute: "오늘 ㅈ같으면 내일도 ㅈ같다"
    },
    {
        qoute: "아 그냥 그만할까 할때 좀 더 하자"
    },
    {
        qoute: "개피곤하면 15분만 자고 하자"
    },
    {
        qoute: "그래도 몰입해서 하니 꿈에서도 코딩친다"
    },
    {
        qoute: "약간 질릴만도 한데 괜찮다"
    },
    {
        qoute: "코딩의 세계는 너무 넓다"
    },
    {
        qoute: "머리가 아프면 잠깐 걷고 오자"
    },
    {
        qoute: "생활의 균형은 그래도 어느정도 맞추자"
    },
    {
        qoute: "모르면 열심히 찾자"
    },
    {
        qoute: "구글 없으면 개발 어케함"
    },
]

const qoute = document.querySelector("#quote span:first-child")
const todaysQuote =quotes[Math.floor(Math.random()*quotes.length)];

qoute.innerText = todaysQuote.qoute;
