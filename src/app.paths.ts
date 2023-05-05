import { BaseRouteUtil } from "./core/utils/route.util";

class AppRoutes extends BaseRouteUtil {
  /**
   * The AppRoutes class defines the `getInstance` method that lets clients access
   * the unique AppRoutes instance.
   */
  private static instance: AppRoutes;
  /**
   * The AppRoutes's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() {
    super();
  }
  /**
   * The static method that controls the access to the singleton instance.
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): AppRoutes {
    if (!this.instance) {
      return (AppRoutes.instance = new AppRoutes());
    }
    return this.instance;
  }

  public getBasePath() {
    return "/";
  }

  public getBaseUrl() {
    return this.getBasePath();
  }

  public getContactPath() {
    return this.getBasePath() + "contact";
  }

  public getContactUrl() {
    return this.getContactPath();
  }
}

export const appRoutesObj = AppRoutes.getInstance();
