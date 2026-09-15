let teams = [
  {
    id: 1,
    tname: "Rusty",
    tl: "arya",
    email: "arya.raj@gmail.com",
    members: 6,
  },
  {
    id: 2,
    tname: "team2",
    tl: "astha",
    email: "ash.shukla@gmail.com",
    members: 6,
  },
];

let nextId = 3;

export const getAllTeams = () => teams;

export const getTeamById = (id) => {
  return teams.find((team) => team.id === id);
};

export const addTeam = (newteam) => {
  const team = {
    id: nextId++,
    ...newteam,
  };

  teams.push(team);

  return team;
};

export const updateTeamById = (id, updateTeam) => {
  const team = getTeamById(id);

  if (!team) return null;

  Object.assign(team, updateTeam);

  return team;
};

export const deleteTeambyId = (id) => {
  const index = teams.findIndex((team) => team.id === id);

  if (index === -1) return null;

  const deletedTeam = teams.splice(index, 1);

  return deletedTeam[0];
};
