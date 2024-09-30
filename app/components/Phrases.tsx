/* This interface will be used to separate the different parts of the phrase out */
export interface Phrase {
  id: number;
  object: string;
  particle: string;
  kanji: string;
  hiragana: string;
  imageURL: string;
}

// You should be able to construct a "Phrase" as long as you include each part
export const phraseList: Phrase[] = [
  {
    id: 0,
    object: "ドア",
    particle: "を",
    kanji: "閉める",
    hiragana: "しめる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif",
  },
  {
    id: 1,
    object: "ドア",
    particle: "が",
    kanji: "閉まる",
    hiragana: "しまる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/giratina-origin.gif",
  },
  {
    id: 2,
    object: "まど",
    particle: "を",
    kanji: "開ける",
    hiragana: "あける",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/keldeo.gif",
  },
  {
    id: 3,
    object: "まど",
    particle: "が",
    kanji: "開く",
    hiragana: "あく",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu.gif",
  },
  {
    id: 4,
    object: "電気",
    particle: "を",
    kanji: "つける",
    hiragana: "つける",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-phd.gif",
  },
  {
    id: 5,
    object: "電気",
    particle: "が",
    kanji: "つく",
    hiragana: "つく",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-rockstar.gif",
  },
  {
    id: 6,
    object: "電気",
    particle: "を",
    kanji: "消す",
    hiragana: "けす",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-popstar.gif",
  },
  {
    id: 7,
    object: "電気",
    particle: "が",
    kanji: "消える",
    hiragana: "きえる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-belle.gif",
  },
  {
    id: 8,
    object: "シャツ",
    particle: "を",
    kanji: "汚す",
    hiragana: "よごす",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-libre.gif",
  },
  {
    id: 9,
    object: "シャツ",
    particle: "が",
    kanji: "汚れる",
    hiragana: "よごれる",
    imageURL: "https://play.pokemonshowdown.com/sprites/ani/pikachu-f.gif",
  },
];
