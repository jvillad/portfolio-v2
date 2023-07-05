export interface IPinnedProjects {
  owner: string;
  repo: string;
  link: string;
  description: string;
  image: string;
  language: string;
  languageColor: string;
}

export type TProject = {
  proj: {
    owner: string;
    repo: string;
    link: string;
    description: string;
    image: string;
    language: string;
    languageColor: string;
  };
};

export interface ILangResponse1 {
  lang1: string;
  lang2: string;
  lang3: string;
  lang4: string;
}

export interface IProgLang {
  progLang: string;
}

export interface PinnedItem {
  node: {
    __typename: string;
    id: string;
    name: string;
    url: string;
    languages: {
      nodes: {
        name: string;
      }[];
    };
    description: string;
    openGraphImageUrl: string;
  };
  __typename: string;
}

export interface DisplayProjProps {
  proj: PinnedItem;
}

export interface NavProps {
  mode: string;
  toggleMode: () => void;
}
