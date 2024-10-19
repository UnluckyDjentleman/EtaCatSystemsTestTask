import PopularCoinsWrapper from "./popularCoins/popularCoinsWrapper";

export default function Header(){
    return(
        <header className="bg-blue-500 sticky top-0 z-50 px-4">
            <PopularCoinsWrapper/>
        </header>
    )
}