interface Charater {
  id: string;
  name: string;
  alternate_names: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string | null;
  yearOfBirth: number | null;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: any;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: string[];
  alive: boolean;
  image: string;
}

// puede ser si es estudiante o no, o buscar por actor para saber el personaje

const validateStudentCharacter = (name: string): Charater | undefined => {
  return undefined;
};

// Daniel Radcliffe -> da
const getCharacterByActor = (actor: string): Charater[] => {
  return [];
};

const validateAge = (name: string): boolean => {
  return false;
};
