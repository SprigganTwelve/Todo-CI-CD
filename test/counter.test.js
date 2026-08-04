/**
 * @jest-environment jsdom
 */

document.body.innerHTML = `
    <span id="score">0</span>
    <span id="time">10</span>
    <span id="best">0</span>

    <button id="startBtn"></button>
    <button id="target"></button>

    <div id="gameArea"></div>
    <div id="winner"></div>

    <input id="playerName">

    <table>
    <tbody id="ranking"></tbody>
    </table>
`;

const game = require("../script");


describe("Speed Click Game", () => {

  beforeEach(() => {
    game.resetGame();
  });

  test("Le score démarre à 0", () => {
    expect(document.getElementById("score").textContent).toBe("0");
  });

  test("Un clic incrémente le score", () => {
    game.incrementScore();

    expect(document.getElementById("score").textContent).toBe("1");
  });

  test("Deux clics donnent un score de 2", () => {
    game.incrementScore();
    game.incrementScore();

    expect(document.getElementById("score").textContent).toBe("2");
  });

});