interface BaseAction<T,V> {
	type: T;
	payload: V;
}

export interface DispatchAction<T,V> extends BaseAction<T, V> {}