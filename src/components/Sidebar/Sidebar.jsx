import Button from "../Button/Button";
import cssBtn from "/src/components/Button/Button.module.scss";

export const Sidebar = () => {

    const handleClick = () => {
        console.log("Hi, I'm Button");
    };

    return (
        <div>
            <Button type="submit" title="Search" onClick={handleClick} propClass={cssBtn.searchBtn} />
        </div>
    )
}