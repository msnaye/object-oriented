const Player = require('../lib/Player');

const Potion = require('../lib/Potion');
const player = new Player('Dave');

jest.mock('../lib/Potion.js');
   console.log(new Potion());

   
  
  test('creates a player object', () => {
    
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
      );
  });
