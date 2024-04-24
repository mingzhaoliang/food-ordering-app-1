import MainNavigation from "./main-navigation";
import MobileNavigation from "./mobile-navigation";
import HeaderWrapper from "./header-wrapper";

export default function Header() {
    return (
        <HeaderWrapper>
            <MainNavigation />
            <MobileNavigation />
        </HeaderWrapper>
    );
}
