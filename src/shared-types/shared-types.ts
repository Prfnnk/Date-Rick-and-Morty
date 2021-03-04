export interface Props {
  nextPage: number;
  setRefetch: React.Dispatch<React.SetStateAction<boolean>>;
  setNextPage: React.Dispatch<React.SetStateAction<number>>;
  fetchMore: any;
  setCards: React.Dispatch<React.SetStateAction<any[]>>;
  setIsRefetching: React.Dispatch<React.SetStateAction<boolean>>;
  newName?: string;
  setNewName?: React.Dispatch<React.SetStateAction<string>>;
  newGender?: string;
  setNewGender?: React.Dispatch<React.SetStateAction<string>>;
  newSpecies?: string;
  setNewSpecies?: React.Dispatch<React.SetStateAction<string>>;
}
