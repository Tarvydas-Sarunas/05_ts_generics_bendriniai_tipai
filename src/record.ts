// record <Keys, Types>

type States = {
  loading: boolean;
  error: string;
  ready: boolean;
};

// type OptionaleStates = Partial<States>;
type OptionaleStates = {
  [Property in keyof States]?: States[Property];
};

type PossibleStateNumbers = 0 | 1 | 2;

const rezult: Record<PossibleStateNumbers, OptionaleStates> = {
  0: { loading: true, ready: false },
  1: { error: 'systeme error', ready: false },
  2: { ready: true },
};
