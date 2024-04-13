import OrderDetails from "@/components/my/orders/order-details/order-details";

export default function OrdersPageLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="w-full md:row-start-2 md:col-span-6 lg:col-span-3 rounded-md">
                {children}
            </div>
            <div className="max-lg:hidden sticky z-50 top-20 xs:top-24 md:top-28 ml-2 xl:ml-6 2xl:ml-8 lg:row-start-2 lg:col-span-3 transition-all">
                <OrderDetails />
            </div>
        </>
    )
}