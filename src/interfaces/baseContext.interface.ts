import React from "react";

export function BaseContext<T,V> {
	state: T;
	dispatch: React.Dispatch<V>;
}