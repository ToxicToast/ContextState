interface IAppState<T> {}

export function InitializeAppState<T extends object>(initAppState: IAppState<T>): IAppState<T> {
	return initAppState;
}