import Button from "./Button";

export default function ButtonPanel(props){
    return(
        <div className="component-button-panel">
            <div>
                <Button name="AC" />
                <Button name="+/-" />
                <Button name="%"/>
                <Button name="÷"  orange/>
            </div>
            <div>
                <Button name="7" />
                <Button name="8" />
                <Button name="9"/>
                <Button name="×"  orange/>
            </div>
            <div>
                <Button name="4" />
                <Button name="5" />
                <Button name="6"/>
                <Button name="-"  orange/>
            </div>
            <div>
                <Button name="1" />
                <Button name="2" />
                <Button name="3"/>
                <Button name="+"  orange/>
            </div>
            <div>
                <Button name="0"  wide/>
                <Button name="." />
                <Button name="="  orange/>
            </div>
        </div>
    )
}