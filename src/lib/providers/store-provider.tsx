import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "@/lib/store/store";
import { DBCartItem } from "@/types/cart";
import { cartActions } from "../store/cart-slice";
import { globalActions } from "../store/global-slice";
import { DBUser } from "@/types/users";

export default function StoreProvider({
	children,
	user,
	cartItems,
}: {
	children: React.ReactNode;
	user: DBUser;
	cartItems: { [key: string]: DBCartItem };
}) {
	const storeRef = useRef<AppStore>();

	if (!storeRef.current) {
		storeRef.current = makeStore();
		storeRef.current.dispatch(globalActions.setUser(user));
		storeRef.current.dispatch(cartActions.setItems(cartItems));
	}

	return <Provider store={storeRef.current}>{children}</Provider>;
}
