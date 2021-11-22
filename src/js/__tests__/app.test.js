import Team from '../app';

test('проверка метода add', () => {
  const team = new Team();
  const character = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  team.add(character);
  expect(team.members).toContain(character);
});

test('проверка метода add на выброс ошибки при дублировании', () => {
  const team = new Team();
  const character = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  team.add(character);
  expect(() => team.add(character)).toThrowError();
});

test('проверка метода addAll', () => {
  const team = new Team();
  const bowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const zombie = {
    name: 'Svyatoslav', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const daemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  team.addAll(bowerman, zombie, daemon, zombie);
  expect(team.members).toContain(bowerman, zombie, daemon);
});

test('проверка метода toArray', () => {
  const team = new Team();
  const bowerman = {
    name: 'Alex', type: 'Bowman', health: 100, level: 1, attack: 25, defence: 25,
  };
  const zombie = {
    name: 'Svyatoslav', type: 'Zombie', health: 100, level: 1, attack: 40, defence: 10,
  };
  const daemon = {
    name: 'Di', type: 'Daemon', health: 100, level: 1, attack: 10, defence: 40,
  };
  team.addAll(bowerman, zombie, daemon);
  const received = team.toArray();
  expect(received).toEqual([bowerman, zombie, daemon]);
});
