export interface BaseAction<T,V> {
	type: T;
	payload: V;
}

