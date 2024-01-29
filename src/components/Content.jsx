import React from "react";
import Card from "./Card";

function Content() {
	return (
		
            <React.Fragment>
   			<Card title="Apple" description="Яблоко" imageUrl="./apple.jpeg" imageAlt="Apple" />
            <Card title="Banana" description="Банан" imageUrl="./banana.jpg" imageAlt="Banana" />
            <Card title="Pear" description="Груша" imageUrl="./pear.jpeg" imageAlt="Pear" />
            </React.Fragment>
		
	);
}

export default Content;