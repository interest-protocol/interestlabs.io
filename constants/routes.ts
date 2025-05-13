export enum RoutesEnum {
  Home = 'home',
  Prr = 'Prr',
}

export const Routes: Record<RoutesEnum, string> = {
  [RoutesEnum.Home]: '/',
  [RoutesEnum.Prr]: '/prr',
};
