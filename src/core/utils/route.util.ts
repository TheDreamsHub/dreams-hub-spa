interface RouteUtilInterface {
  get404Path(): string;
  getForbiddenPath(): string;
}

export class BaseRouteUtil implements RouteUtilInterface {
  get404Path(): string {
    return "/404";
  }

  getForbiddenPath(): string {
    return "/forbidden";
  }
}
