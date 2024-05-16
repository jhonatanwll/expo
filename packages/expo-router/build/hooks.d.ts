import { ExpoRouter } from '../types/expo-router';
type SearchParams = Record<string, string | string[]>;
export declare function useRootNavigationState(): import("./fork/getStateFromPath").ResultState;
export declare function useRouteInfo(): import("./LocationProvider").UrlObject;
/** @deprecated Use [`useNavigationContainerRef`](#usenavigationcontainerref) instead, which returns a React `ref`. */
export declare function useRootNavigation(): import("@react-navigation/native").NavigationContainerRef<ReactNavigation.RootParamList> | null;
/** @return The root `<NavigationContainer />` ref for the app. The `ref.current` may be `null` if the `<NavigationContainer />` hasn't mounted yet. */
export declare function useNavigationContainerRef(): import("@react-navigation/native").NavigationContainerRefWithCurrent<ReactNavigation.RootParamList>;
export declare function useRouter(): ExpoRouter.Router;
/**
 * @private
 * @returns The current global pathname with query params attached. This may change in the future to include the hostname from a predefined universal link. For example, `/foobar?hey=world` becomes `https://acme.dev/foobar?hey=world`.
 */
export declare function useUnstableGlobalHref(): string;
/**
 * Get a list of selected file segments for the currently selected route. Segments are not normalized, so they will be the same as the file path. For example: `/[id]?id=normal -> ["[id]"]`.
 *
 * @example
 * ```tsx app/profile/[user].tsx
 * import { Text } from 'react-native';
 * import { useSegments } from 'expo-router';
 *
 * export default function Route() {
 *   // segments = ["profile", "[user]"]
 *   const segments = useSegments();
 *
 *   return <Text>Hello</Text>;
 * }
 * ```
 *
 *
 * `useSegments` can be typed using an abstract. Consider the following file structure, and strictly typed `useSegments` function:
 *
 * ```md
 * - app
 *   - [user]
 *     - index.js
 *     - followers.js
 *   - settings.js
 * ```
 *
 *
 * This can be strictly typed using the following abstract:
 *
 * ```ts
 * const [first, second] = useSegments<['settings'] | ['[user]'] | ['[user]', 'followers']>()
 * ```
 */
export declare function useSegments<TSegments extends string[] = string[]>(): TSegments;
/**
 * Global selected route location without search parameters. For example, `/acme?foo=bar` -> `/acme`. Segments will be normalized: `/[id]?id=normal` -> `/normal`.
 *
 * @example
 * ```tsx app/profile/[user].tsx
 * import { Text } from 'react-native';
 * import { useSegments } from 'expo-router';
 *
 * export default function Route() {
 *   // segments = ["profile", "[user]"]</b>
 *   const segments = useSegments();
 *
 *   return <Text>Hello</Text>;
 *
 * }
 * ```
 *
 */
export declare function usePathname(): string;
/**
 * Get the globally selected query parameters, including dynamic path segments. This function will update even when the route is not focused.
 * Useful for analytics or other background operations that don't draw to the screen.
 *
 * When querying search params in a stack, opt-towards using [`useLocalSearchParams`](#uselocalsearchparams) as these will only
 * update when the route is focused.
 *
 * Route URL example: `acme://profile/baconbrix?extra=info`.
 *
 * > **Note:** See [local versus global search parameters](/router/reference/search-parameters/#local-versus-global-search-parameters) for usage
 * > information.
 *
 *
 * @example
 * ```tsx app/profile/[user].tsx
 * import { Text } from 'react-native';
 * import { useGlobalSearchParams } from 'expo-router';
 *
 * export default function Route() {
 *
 *  // user=baconbrix & extra=info
 *  const { user, extra } = useGlobalSearchParams();
 *  return <Text>User: {user}</Text>;
 * }
 * ```
 *
 */
export declare function useGlobalSearchParams<TParams extends SearchParams = SearchParams>(): Partial<TParams>;
/**
 * Get the URL search parameters for the contextually focused route. For example, `/acme?foo=bar` -> `{ foo: "bar" }`.
 * This is useful for stacks where you may push a new screen that changes the query parameters.
 *
 * To observe updates even when the invoking route is not focused, use [`useGlobalSearchParams`](#useglobalsearchparams).
 *
 * When `/abc/home` pushes `/123/shop`, `useGlobalSearchParams` returns `{ first: undefined, second: '123' }` on `app/[first]/home.tsx`
 * because the global URL has changed.
 *
 * However, you may want the params to remain `{ first: 'abc' }` to reflect the context of the screen. In this
 * case, you can use `useLocalSearchParams` to ensure the params `{ first: 'abc' }` are still returned in `app/[first]/home.tsx`
 *
 * > **Note:** See [local versus global search parameters](/router/reference/search-parameters/#local-versus-global-search-parameters) for usage
 * > information.
 *
 * Route URL example: `acme://profile/baconbrix?extra=info`.
 *
 * @example
 * ```ts app/profile/[user].tsx
 * import { Text } from 'react-native';
 * import { useLocalSearchParams } from 'expo-router';
 *
 * export default function Route() {
 *  const { user, extra } = useLocalSearchParams();
 *
 *  return <Text>User: {user}</Text>;
 * }
 * ```
 *
 *
 */
export declare function useLocalSearchParams<TParams extends SearchParams = SearchParams>(): Partial<TParams>;
export {};
//# sourceMappingURL=hooks.d.ts.map