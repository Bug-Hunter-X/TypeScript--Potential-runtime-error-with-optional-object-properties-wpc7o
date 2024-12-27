function printCoord(pt?: { x?: number; y?: number }) {
    if (pt) {
        console.log("The coordinate's x value is " + (pt.x ?? 'undefined'));
        console.log("The coordinate's y value is " + (pt.y ?? 'undefined'));
    } else {
        console.log("No coordinates provided");
    }
}

printCoord({ x: 3, y: 7 });
printCoord({});
printCoord();