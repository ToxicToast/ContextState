import React from "react";

interface BaseContext<T,V> {
	state: T;
	dispatch: React.Dispatch<V>;
}

export interface InitializeContext<T,V> extends BaseContext<T, V> {};