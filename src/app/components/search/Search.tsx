
// icon
import { FaMagnifyingGlass } from "react-icons/fa6";

export const Search = () => {
    return (
        <>
            <form 
                action=""
                className="w-[100%] dark:bg-darkModePrimary rounded-[50px] overflow-hidden py-[12px] px-[32px] flex items-center md:gap-x-[20px] gap-x-[10px] mb-[30px]"
            >
                <input
                    type="search"
                    name="keyword"
                    placeholder="Tìm kiếm..."
                    className="flex-1 order-2 bg-transparent outline-none md:text-[15px] text-[13px] font-400 dark:text-darkModeText dark:placeholder-darkModeText"
                    defaultValue={""}
                >
                </input>

                <button 
                    type="submit"
                    className="order-1 text-[18px] dark:text-darkModeText"
                >
                    <FaMagnifyingGlass />
                </button>
            </form>
        </>
    );
}