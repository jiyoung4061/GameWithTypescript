interface ICard { // 실제 사용하지 않지만 class의 틀을 정형화하고 싶을 때
    att?: number;
    hp?: number;
} //=> class에서 변수 값이 public이어야 오류 안뜸!

class Card implements ICard{
    public att?: number; 
    public hp?: number; // 해당 클래스와 그 클래스를 상속받은 자식들까지 사용 가능
    private cost?: number; // 해당 클래스 안에서만 사용 가능
    private mine?: boolean;
    constructor(hero: boolean, mine: boolean){
        if(hero){
            return new Hero(mine);
        } else {
            this.att = Math.ceil(Math.random() * 5);
            this.hp =Math.ceil(Math.random() * 5);
            this.cost = Math.floor((this.att + this.hp)/2);
        }
        if(mine){
            this.mine = true;
        }
    }
}
// new Card(false, true) //내카드이면서 hero가 아닌 카드
class Hero extends Card {
    private hero: boolean;
    private field: boolean;
    constructor(mine){
        super(true, mine);
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}

interface Player {
    hero: HTMLDivElement
    deck: HTMLDivElement
    field: HTMLDivElement
    cost: HTMLDivElement
    deckData: Card[]
    heroData?: Card | null
    fieldData: Card[]
    chosenCard?: HTMLDivElement | null
    chosenCardData?: Card | null
}

const opponent:Player = {
  hero: document.getElementById('rival-hero') as HTMLDivElement,
  deck: document.getElementById('rival-deck') as HTMLDivElement,
  field: document.getElementById('rival-cards') as HTMLDivElement,
  cost: document.getElementById('rival-cost') as HTMLDivElement,
  deckData: [],
  heroData: null,
  fieldData: [],
  chosenCard: null,
  chosenCardData: null,
};

const me:Player = {
  hero: document.getElementById('my-hero') as HTMLDivElement,
  deck: document.getElementById('my-deck') as HTMLDivElement,
  field: document.getElementById('my-cards') as HTMLDivElement,
  cost: document.getElementById('my-cost') as HTMLDivElement,
  deckData: [],
  heroData: null,
  fieldData: [],
  chosenCard: null,
  chosenCardData: null,
};

