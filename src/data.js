// Demo data only. Every restaurant owns a menu with independently priced variants.
export const branches=[
{id:'kowale',name:'Delta Kebab — Kowale',city:'Kowale',address:'Apollina 16/2, Kowale',active:true},
{id:'gdansk',name:'Delta Kebab — Gdańsk',city:'Gdańsk',address:'Długa 101A, Gdańsk',active:true},
{id:'gdynia',name:'Delta Kebab — Gdynia',city:'Gdynia',address:'Morska 8, Gdynia',active:true},
{id:'sopot',name:'Delta Kebab — Sopot',city:'Sopot',address:'Mickiewicza 2, Sopot',active:true}];
export const categories=['Rollo','Kebab','Box','Pizza','Dodatki','Napoje'];
export const catalog={
rollo:{name:{pl:'DELTA ROLLO',en:'DELTA ROLLO',uk:'ДЕЛЬТА РОЛО'},description:{pl:'pita, mięso, surówka, sos',en:'pita, meat, salad, sauce',uk:'піта, м’ясо, салат, соус'},category:'Rollo',image:'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=680&q=65',meat:true,salad:true,sauces:true},
cheese:{name:{pl:'ROLLO DELTA Z SEREM',en:'ROLLO DELTA WITH CHEESE',uk:'РОЛО ДЕЛЬТА З СИРОМ'},description:{pl:'pita, ser, mięso, surówka, sos',en:'pita, cheese, meat, salad, sauce',uk:'піта, сир, м’ясо, салат, соус'},category:'Rollo',image:'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=680&q=65',meat:true,salad:true,sauces:true},
meat:{name:{pl:'ROLLO TYLKO MIĘSO',en:'ROLLO ONLY MEAT',uk:'РОЛО ТІЛЬКИ М’ЯСО'},description:{pl:'pita, mięso, sos',en:'pita, meat, sauce',uk:'піта, м’ясо, соус'},category:'Rollo',image:'https://images.unsplash.com/photo-1561651823-34feb02250e4?w=680&q=65',meat:true,sauces:true},
kebab:{name:{pl:'KEBAB W BUŁCE',en:'KEBAB IN BREAD',uk:'КЕБАБ У БУЛОЧЦІ'},description:{pl:'mięso, warzywa, sos',en:'meat, vegetables, sauce',uk:'м’ясо, овочі, соус'},category:'Kebab',image:'https://images.unsplash.com/photo-1559847844-5315695dadae?w=680&q=65',meat:true,salad:true,sauces:true},
box:{name:{pl:'KEBAB BOX',en:'KEBAB BOX',uk:'КЕБАБ БОКС'},description:{pl:'mięso, frytki, sos',en:'meat, fries, sauce',uk:'м’ясо, картопля фрі, соус'},category:'Box',image:'https://images.unsplash.com/photo-1547592180-85f173990554?w=680&q=65',meat:true,sauces:true},
pizza:{name:{pl:'PIZZA MARGHERITA',en:'MARGHERITA PIZZA',uk:'ПІЦА МАРГАРИТА'},description:{pl:'mozzarella, pomidory, sos',en:'mozzarella, tomatoes, sauce',uk:'моцарела, помідори, соус'},category:'Pizza',image:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=680&q=65',sauces:false},
fries:{name:{pl:'FRYTKI',en:'FRIES',uk:'КАРТОПЛЯ ФРІ'},description:{pl:'chrupiące frytki',en:'crispy fries',uk:'хрустка картопля фрі'},category:'Dodatki',image:'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=680&q=65'},
drink:{name:{pl:'NAPÓJ',en:'SOFT DRINK',uk:'НАПІЙ'},description:{pl:'napój chłodzący',en:'refreshing soft drink',uk:'прохолодний напій'},category:'Napoje',image:''}};
const variants=(a,b,c)=>[{id:'standard',price:a},{id:'medium',price:b},{id:'mega',price:c}];
export const menus={
kowale:{rollo:variants(18,24,29),cheese:variants(20,26,32),meat:variants(25,31,37),kebab:variants(22,27,33),box:variants(24,29,35),pizza:[{id:'standard',price:28},{id:'medium',price:35},{id:'mega',price:42}],fries:[{id:'standard',price:9}],drink:[{id:'standard',price:7}]},
gdansk:{rollo:variants(21,27,33),cheese:variants(24,30,36),kebab:variants(25,31,37),box:variants(27,32,39),pizza:[{id:'standard',price:31},{id:'medium',price:39},{id:'mega',price:47}],fries:[{id:'standard',price:11}],drink:[{id:'standard',price:8}]},
gdynia:{rollo:variants(19,25,31),cheese:variants(22,28,34),meat:variants(27,33,39),kebab:variants(23,29,35),fries:[{id:'standard',price:10}],drink:[{id:'standard',price:7}]},
sopot:{rollo:variants(23,29,35),cheese:variants(25,32,39),box:variants(28,35,41),pizza:[{id:'standard',price:34},{id:'medium',price:43},{id:'mega',price:51}],drink:[{id:'standard',price:9}]}};
export const optionRules={
meats:[{id:'chicken',price:0},{id:'beef',price:2},{id:'mixed',price:3}],salads:[{id:'withSalad',price:0},{id:'noSalad',price:0}],sauces:[{id:'mild',price:0},{id:'spicy',price:0},{id:'garlic',price:0}],maxSauces:2,
extras:[{id:'cheeseExtra',price:3},{id:'meatExtra',price:6},{id:'friesExtra',price:4}]};
export const branchRules={sopot:{extras:[{id:'cheeseExtra',price:4},{id:'meatExtra',price:8},{id:'friesExtra',price:5}]},gdansk:{maxSauces:1}};
export const getRules=id=>({...optionRules,...(branchRules[id]||{})});
export const money=n=>`${Number(n).toFixed(2)} PLN`;
