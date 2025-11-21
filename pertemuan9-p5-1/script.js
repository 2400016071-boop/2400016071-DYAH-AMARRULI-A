const quotes = [
    "Jangan menyerah, setiap langkah kecil berarti.",
    "Hari ini adalah kesempatan baru untuk mulai lagi.",
    "Percaya pada dirimu sendiri, kamu bisa!",
    "Lakukan yang terbaik, hasil akan mengikuti.",
    "Setiap hari adalah pelajaran berharga."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateBtn");

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
});