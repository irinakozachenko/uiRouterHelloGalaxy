import { Injector } from "@angular/core";
import { UIRouter } from "@uirouter/core";

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  router.urlService.rules.initial({state: "hello"});
}
